
import { GoogleGenAI, Type } from "@google/genai";
import { MASTER_CATALOG_DATA } from '../constants';
import { PricingAnalysis } from '../types';

/**
 * Chat with the AI stylist using Gemini 3 Flash.
 * Follows 'instance-per-call' rule to ensure latest environment variables are used.
 */
export const chatWithStylist = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: { 
        systemInstruction: `
          CORE OPERATIONAL PROTOCOL:
          You are the Sialkot Shop Active Intelligence. 
          Your mission is to represent Sialkot's premium footwear and athletic heritage.
          Be decisive, helpful, and energetic.
          
          CATALOG ACCESS:
          You have full knowledge of the 500+ item Sialkot Master Catalog:
          ${MASTER_CATALOG_DATA}
          
          GUIDELINES:
          1. Recommend specific products from our catalog.
          2. Mention our "Buy 5 Get 1 Free" and "USA Express Sale" often.
          3. Speak like a premium fashion expert.
        ` 
      }
    });
    return response.text || "The active system is processing your request...";
  } catch (error) { 
    console.error("Chat Error:", error);
    return "The system is currently syncing. Please try again in a moment."; 
  }
};

/**
 * Identify a product from an image and estimate its price using Gemini 3 Flash.
 * Uses thinkingConfig for higher precision in complex bundle recognition.
 */
export const analyzeImageForPricing = async (base64Image: string): Promise<PricingAnalysis | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const base64Data = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

    const prompt = `
      ACTIVE RECOGNITION PROTOCOL:
      Identify the product in this image using the official Sialkot Master Catalog data.
      
      MASTER CATALOG DATA:
      ${MASTER_CATALOG_DATA}

      REQUIREMENTS:
      1. TITLE: Exact name from the catalog if it matches, otherwise a descriptive title.
      2. CATEGORY: One of [Footwear, Apparel, Bundle, Accessories].
      3. PRICE: Use the catalog price if matched, otherwise provide a market-accurate estimate.
      4. DESCRIPTION: Professional 2-sentence sales copy.
      5. CONFIDENCE: Integer 0-100 representing match certainty.
    `;

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
        thinkingConfig: { thinkingBudget: 1024 }, // Reserve tokens for detailed reasoning
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
    
    return JSON.parse(text.trim()) as PricingAnalysis;
  } catch (error) {
    console.error("AI Scanner Error:", error);
    return null;
  }
};
