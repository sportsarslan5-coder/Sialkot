
import { GoogleGenAI, Type } from "@google/genai";
import { MASTER_CATALOG_DATA } from '../constants';
import { PricingAnalysis } from '../types';

/**
 * CORE COMMAND: "The Sialkot Neural Core is now synchronized."
 * Upgraded to gemini-3-pro-preview to handle the high-density catalog processing.
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
      model: 'gemini-3-pro-preview',
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
    
    // Ensure clean base64 data
    const parts = base64Image.split(',');
    const mimeType = parts[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
    const base64Data = parts[1];

    const prompt = `
      ACTIVE RECOGNITION COMMAND: "Identify. Verify. Excel."
      You are a world-class fashion identification system for Sialkot Shop.
      Analyze the provided image and match it against the Sialkot Master Catalog.
      
      CATALOG REFERENCE:
      ${MASTER_CATALOG_DATA}

      INSTRUCTIONS:
      - If the image contains a shoe, apparel, or kit, find the closest match in the catalog.
      - If it is a clear Nike/Adidas or major brand, use the catalog's naming conventions for similar items if the exact model isn't listed.
      - Return the data in the specified JSON format.

      JSON STRUCTURE:
      {
        "title": "Exact Catalog Name",
        "category": "One of [Footwear, Apparel, Bundle, Accessories]",
        "description": "Engaging, high-energy sales copy (2 sentences)",
        "estimatedPrice": "$XX.XX",
        "confidence": 0-100
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
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
        thinkingConfig: { thinkingBudget: 4096 }, // Increased budget for complex 500-item matching
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
  } catch (error: any) {
    // Check for specific RPC/Network failures
    console.error("Neural Scan Fault:", error);
    if (error?.message?.includes('xhr error') || error?.message?.includes('Rpc failed')) {
      throw new Error("NETWORK_RPC_FAILURE");
    }
    return null;
  }
};
