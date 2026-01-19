
import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS, MASTER_CATALOG_DATA } from '../constants';
import { PricingAnalysis } from '../types';

/**
 * Chat with the AI stylist using Gemini 3 Flash.
 * Creates a fresh instance of GoogleGenAI before each call to ensure the latest API key is used.
 */
export const chatWithStylist = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: { 
        systemInstruction: "You are an AI assistant for Sialkot Shop. You help identify products and answer customer queries about the 500-item catalog provided in the context." 
      }
    });
    return response.text || "Thinking...";
  } catch (error) { 
    console.error("Chat Error:", error);
    return "Error connecting to AI"; 
  }
};

/**
 * Identify a product from an image and estimate its price using Gemini 3 Flash.
 */
export const analyzeImageForPricing = async (base64Image: string): Promise<PricingAnalysis | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const base64Data = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

  const prompt = `
    You are an expert AI product identifier for Sialkot Shop. 
    Analyze this image and identify the product. 

    MASTER CATALOG REFERENCE: 
    You MUST check if the item in the image matches any item from our official 500-item catalog:
    ${MASTER_CATALOG_DATA}

    INSTRUCTIONS:
    1. If the item matches a catalog item, use the EXACT CATALOG NAME.
    2. CATEGORY: Classify it correctly (Clothing, Footwear, Electronics, Accessories, Outdoor, etc.).
    3. PRICE: If it's in the catalog, use the catalog price (e.g., "$45"). 
    4. DESCRIPTION: Provide a high-quality 2-sentence description.
    5. CONFIDENCE: Provide a percentage from 0-100.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            { inlineData: { mimeType: 'image/jpeg', data: base64Data } }
          ]
        }
      ],
      config: { 
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            category: { type: Type.STRING },
            description: { type: Type.STRING },
            estimatedPrice: { type: Type.STRING },
            confidence: { type: Type.NUMBER }
          },
          required: ["title", "category", "description", "estimatedPrice", "confidence"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    
    try {
      return JSON.parse(text.trim()) as PricingAnalysis;
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError, text);
      return null;
    }
  } catch (error) {
    console.error("AI Scanner Error:", error);
    return null;
  }
};
