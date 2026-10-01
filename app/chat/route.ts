import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  });

  export async function POST(req: Request) {
    try {
        const { message } = await req.json();

            if (!message) {
                  return Response.json(
                          { error: "Pesan tidak boleh kosong." },
                                  { status: 400 }
                                        );
                                            }

                                                const interaction = await ai.interactions.create({
                                                      model: "gemini-3.5-flash-lite",
                                                            input: message,
                                                                });

                                                                    return Response.json({
                                                                          reply: interaction.output_text,
                                                                              });
                                                                                } catch (error) {
                                                                                    console.error("Gemini API Error:", error);

                                                                                        return Response.json(
                                                                                              { error: "Terjadi kesalahan saat menghubungi AI." },
                                                                                                    { status: 500 }
                                                                                                        );
                                                                                                          }
                                                                                                          }import