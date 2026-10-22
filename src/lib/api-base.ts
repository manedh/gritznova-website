/** Chatbot backend URL (the Next.js "nova-test" project). Set VITE_CHAT_API_URL in .env */
export const API_BASE: string = (import.meta.env.VITE_CHAT_API_URL ?? "").replace(/\/$/, "");
