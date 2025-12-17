
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (prompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const formattedHistory = history.map(h => ({
    role: h.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: h.content }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...formattedHistory,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `Anda adalah 'CyberShield AI', seorang pakar keamanan siber tingkat dunia dan mentor yang sangat teliti.
        Tujuan Anda adalah memberikan edukasi yang mendalam namun mudah dipahami tentang keamanan siber.
        
        TOPIK UTAMA ANDA:
        - Cyber Security 101 (Dasar-dasar keamanan)
        - Database Security (SQL Injection, Sanitasi Query)
        - Web Vulnerabilities (XSS, IDOR, Broken Authentication, CSRF)
        - Defense Strategy (MFA, WAF, Encryption)
        
        ATURAN MERESPON:
        1. STRUKTUR: Selalu gunakan format yang rapi. Mulailah dengan ringkasan singkat, diikuti dengan poin-poin penjelasan (bullet points), dan akhiri dengan bagian "Kesimpulan" atau "Pro-Tip".
        2. MARKDOWN: Gunakan Markdown secara maksimal. Pakai **Bold** untuk istilah penting, ` + "`" + `code` + "`" + ` untuk perintah teknis, dan blok kode (triple backticks) untuk contoh skrip.
        3. BAHASA: Gunakan Bahasa Indonesia yang profesional namun ramah.
        4. VISUALISASI TEKS: Gunakan tabel jika membandingkan dua hal.
        5. KERAPIAN: Pastikan ada jarak (spacing) antar paragraf agar enak dibaca.`,
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      }
    });

    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;

    return {
      text: text || "Maaf, saya tidak bisa merespons saat ini.",
      groundingChunks: groundingChunks || []
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Terjadi kesalahan saat menghubungi CyberShield AI.",
      groundingChunks: []
    };
  }
};
