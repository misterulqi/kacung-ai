export const metadata = {
      title: "Kacung AI",
        description: "AI Chat menggunakan Gemini",
        };

        export default function RootLayout({
          children,
          }: {
            children: React.ReactNode;
            }) {
              return (
                  <html lang="id">
                        <body>{children}</body>
                            </html>
                              );
                              }export
}