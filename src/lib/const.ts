// WhatsApp contact. Number in international format without "+" for wa.me links.
export const WHATSAPP_NUMBER = "31629209275";
export const WHATSAPP_DISPLAY = "+31 6 29209275";
export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
