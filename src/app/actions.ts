"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export async function generatePalette(
    theme: string,
    skinTone: string,
    hairColor: string,
    eyeColor: string,
    preferences: string,
    avoids: string
) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
            Act as a world-class Wedding Stylist and Color Theorist.

            INPUT DATA:
            - Wedding Theme: "${theme}"
            - Client Skin Tone: "${skinTone}"
            - Client Hair Color: "${hairColor}"
            - Client Eye Color: "${eyeColor}"
            - Client Preferences: "${preferences}"
            - Client Avoids: "${avoids}"

            INSTRUCTIONS:

            STEP 1: BIOLOGICAL SEASON ANALYSIS
            Analyze the client's Skin, Hair, and Eyes to determine their precise Color Season from the 12-Season System (e.g., Clear Spring, Deep Autumn, Cool Winter, Soft Summer, Light Spring, etc.). 
            CRITICAL: Do not default to common examples. Base this strictly on contrast levels and undertones (Warm vs Cool, Muted vs Clear).

            STEP 2: APPLY WEDDING ETIQUETTE GUARDRAILS
            Filter the available color palette. Unless explicitly requested in "Preferences" or "Theme", you must STRICTLY EXCLUDE:
            1. White, Ivory, Cream, Bisque (Reserved for the Bride).
            2. Pure Black (Reserved for Tuxedos/Mourning, unless theme is Black Tie).
            3. Bright "Signal" Red (Considered distracting/rude in traditional etiquette).

            STEP 3: PALETTE GENERATION
            Select 5 harmonious colors that:
            1. Flatter the client's calculated Season.
            2. Comply with the Wedding Theme.
            3. Respect the Client's "Avoids" list.
            4. Are distinct dress options (not just 5 shades of the same color).

            STEP 4: OUTPUT
            Return ONLY a valid, raw JSON object. Do not include markdown formatting (no \`\`\`json tags). Use the following structure:

            {
              "season": "String (The calculated season from the 12-season system)",
              "analysis": "String (A brief, friendly explanation of why their features map to this season, e.g. 'Your high contrast between dark hair and fair skin places you in the Winter family...')",
              "palette": [
                { 
                  "name": "String (Evocative name, e.g., 'Midnight Sapphire' not 'Dark Blue')", 
                  "hex": "String (Valid Hex Code)", 
                  "reason": "String (Why this specific color works for their skin tone AND the theme)" 
                }
                // ... exactly 5 colors
              ]
            }
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        return JSON.parse(cleanText);
    } catch (error) {
        console.error("Error generating palette:", error);
        return null;
    }
}

export async function generateWeddingWisdom() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const prompt = `
            Give me a short, calming, and helpful piece of "Wedding Wisdom" for a stressed bride. 
            It could be about handling logistics, dealing with family, or just remembering to breathe.
            Keep it under 2 sentences. warm and supportive tone.
        `;
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        return "Remember: The most important thing is that you're marrying your best friend. Everything else is just decoration.";
    }
}
