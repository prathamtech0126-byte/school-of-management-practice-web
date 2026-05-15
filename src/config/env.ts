/**
 * Client-side env (Vite). Define `VITE_API_BASE_URL` in `.env` (see `.env.example`).
 */
const raw = import.meta.env.VITE_API_BASE_URL

export const API_BASE_URL =
  typeof raw === 'string' && raw.trim().length > 0 ? raw.trim().replace(/\/$/, '') : 'http://localhost:5000'
