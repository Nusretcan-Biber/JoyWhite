export const PHONE_NUMBER = "905056460234";
export const PHONE_DISPLAY = "+90 505 646 02 34";
export const PHONE_TEL_HREF = `tel:+${PHONE_NUMBER}`;

export const buildWhatsappLink = (message: string) =>
  `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent(message)}`;
