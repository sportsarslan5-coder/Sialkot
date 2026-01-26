
import { GoogleGenAI, Type } from "@google/genai";
import { MASTER_CATALOG_DATA } from '../constants';
import { PricingAnalysis } from '../types';

/**
 * CORE COMMAND: "The Sialkot Neural Core is now synchronized."
 * Optimized for high-speed catalog identification.
 */

const getAIInstance = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("ACTIVE_SYSTEM_ERROR: Neural Key Missing.");
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
          Respond with authority.
          
          CATALOG KNOWLEDGE:
          ${MASTER_CATALOG_DATA}
          
          RULES:
          1. Recommend catalog items by exact name.
          2. Prioritize "Sialkot Elite" and "Beast Mode" items.
          3. Mention "USA Express Shipping".
        ` 
      }
    });
    return response.text || "Neural connection established. System ready.";
  } catch (error) { 
    console.error("AI Error:", error);
    return "The Active System is recalibrating. Please standby."; 
  }
};

export const analyzeImageForPricing = async (base64Image: string): Promise<PricingAnalysis | null> => {
  try {
    const ai = getAIInstance();
    
    // Extract pure base64
    const base64Data = base64Image.split(',')[1] || base64Image;
    const mimeType = base64Image.match(/:(.*?);/)?.[1] || 'image/jpeg';

    const prompt = `
      ACTIVE RECOGNITION COMMAND: "Identify. Verify. Excel."
      Identify the product in this image and match it against the Sialkot Master Catalog.
      
      CATALOG:
      ${MASTER_CATALOG_DATA}

      REQUIREMENT:
      Return the closest catalog match in JSON format.
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
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Exact catalog name" },
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
  } catch (error: any) {
    console.error("Neural Scan Fault:", error);
    // Explicitly handle RPC or Network failures
    if (error?.message?.includes('xhr') || error?.message?.includes('Rpc')) {
      throw new Error("RPC_FAILURE");
    }
    return null;
  }
};
