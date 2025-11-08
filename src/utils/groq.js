import { GROQ_API_KEY } from "./constants";

// Minimal Groq client using fetch

console.log("GROQ_API_KEY:", GROQ_API_KEY);
export async function groqChatCompletion({ model, messages }) {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
            model,
            messages,
        }),
    });

    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error?.message || `Groq API Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
