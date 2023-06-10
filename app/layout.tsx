import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio website by Muhammad Zafar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="scroll-smooth">
          {children}
      </body>
    </html>
  );
}
