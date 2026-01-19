
interface WhatsAppConfig {
  accessToken: string;
  phoneNumberId: string;
  targetPhoneNumber: string;
}

// Helper: Convert Base64 to Blob
const base64ToBlob = (base64: string, mimeType: string = 'image/jpeg'): Blob => {
  const byteCharacters = atob(base64.split(',')[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: mimeType });
};

/**
 * Uploads an image to WhatsApp Media Endpoint
 */
const uploadMedia = async (base64Image: string, config: WhatsAppConfig): Promise<string> => {
  const blob = base64ToBlob(base64Image);
  const formData = new FormData();
  formData.append('file', blob, 'product_image.jpg');
  formData.append('type', 'image/jpeg');
  formData.append('messaging_product', 'whatsapp');

  const token = config.accessToken.trim();

  const response = await fetch(`https://graph.facebook.com/v18.0/${config.phoneNumberId.trim()}/media`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json();
  if (data.error) {
    console.error("Media Upload Error:", data.error);
    throw new Error(`Media Upload Failed: ${data.error.message}`);
  }
  return data.id;
};

/**
 * Sends the image with caption to the user
 */
export const sendWhatsAppOrder = async (
  base64Image: string,
  orderDetails: string,
  config: WhatsAppConfig
): Promise<boolean> => {
  try {
    const token = config.accessToken.trim();

    // 1. Upload Image
    const mediaId = await uploadMedia(base64Image, config);

    // 2. Send Message
    const payload = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: config.targetPhoneNumber.trim(),
      type: "image",
      image: {
        id: mediaId,
        caption: orderDetails
      }
    };

    const response = await fetch(`https://graph.facebook.com/v18.0/${config.phoneNumberId.trim()}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (data.error) {
      console.error("WhatsApp Send Error:", data.error);
      throw new Error(data.error.message);
    }

    return true;
  } catch (error) {
    console.error("WhatsApp Automation Failed:", error);
    throw error;
  }
};
