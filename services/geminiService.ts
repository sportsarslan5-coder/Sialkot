
import { GoogleGenAI, Type } from "@google/genai";
import { MASTER_CATALOG_DATA } from '../constants';
import { PricingAnalysis } from '../types';

/**
 * CORE COMMAND: "The Sialkot Neural Core is now synchronized."
 * This service manages the Active Intelligence layer of Sialkot Shop.
 */

const getAIInstance = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("ACTIVE_SYSTEM_ERROR: Neural Key Missing. Ensure API_KEY is set.");
  }
  return new GoogleGenAI({ apiKey });
};

export const chatWithStylist = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  try {
    const ai = getAIInstance();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: { 
        systemInstruction: `
          ACTIVE SYSTEM PROTOCOL: "Precision. Heritage. Power."
          You are the Sialkot Shop Active Expert. 
          Respond with authority. You represent the finest craftsmanship in Pakistan.
          
          CATALOG KNOWLEDGE:
          ${MASTER_CATALOG_DATA}
          
          RULES:
          1. Recommend catalog items by exact name.
          2. Prioritize "Sialkot Elite" and "Beast Mode" items.
          3. Mention "USA Express Shipping" as our primary global logistics advantage.
          4. If asked about the system, reply: "The Active System is fully operational and synchronized with the Sialkot Master Catalog."
        ` 
      }
    });
    return response.text || "Neural connection established. System ready.";
  } catch (error) { 
    console.error("AI Error:", error);
    return "The Active System is recalibrating for maximum performance. Please standby."; 
  }
};

export const analyzeImageForPricing = async (base64Image: string): Promise<PricingAnalysis | null> => {
  try {
    const ai = getAIInstance();
    const mimeType = base64Image.match(/^data:(image\/[a-zA-Z]+);base64,/)?.[1] || 'image/jpeg';
    const base64Data = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

    const prompt = `
      ACTIVE RECOGNITION COMMAND: "Identify. Verify. Excel."
      Analyze this frame against the Sialkot Master Catalog. 
      The system must provide a 100% catalog match if possible.

      CATALOG:
      ${MASTER_CATALOG_DATA}

      JSON OUTPUT REQUIREMENTS:
      - title: String (Match catalog exactly)
      - category: String (Footwear/Apparel/Bundle)
      - description: String (High-energy sales copy)
      - estimatedPrice: String (e.g., "$110")
      - confidence: Integer (Probability)
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            { inlineData: { mimeType, data: base64Data } }
          ]
        }
      ],
      config: { 
        thinkingConfig: { thinkingBudget: 2048 },
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
    if (!text) throw new Error("EMPTY_NEURAL_RESPONSE");
    
    return JSON.parse(text.trim()) as PricingAnalysis;
  } catch (error) {
    console.error("Neural Scan Fault:", error);
    return null;
  }
};
