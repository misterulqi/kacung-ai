import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
      const { message } = await request.json();

          if (!message || typeof message !== "string") {
                return NextResponse.json(
                        { error: "Pesan tidak valid." },
                                { status: 400 }
                                      );
                                          }

                                              const apiKey = process.env.GEMINI_API_KEY;

                                                  if (!apiKey) {
                                                        return NextResponse.json(
                                                                { error: "GEMINI_API_KEY belum diatur." },
                                                                        { status: 500 }
                                                                              );
                                                                                  }

                                                                                      const ai = new GoogleGenAI({
                                                                                            apiKey: apiKey,
                                                                                                });

                                                                                                    const interaction = await ai.interactions.create({
                                                                                                          model: "gemini-3.8-flash",
                                                                                                                input: message,
                                                                                                                    });

                                                                                                                        return NextResponse.json({
                                                                                                                              reply: interaction.output_text || "Tidak ada jawaban.",
                                                                                                                                  });
                                                                                                                                    } catch (error) {
                                                                                                                                        console.error(error);

                                                                                                                                            return NextResponse.json(
                                                                                                                                                  { error: "Terjadi kesalahan saat memproses pesan." },
                                                                                                                                                        { status: 500 }
                                                                                                                                                            );
                                                                                                                                                              }
                                                                                                                                                              }import