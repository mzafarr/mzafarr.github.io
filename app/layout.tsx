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
      <head>
        <meta
          name="google-site-verification"
          content="OPtENAC_KqIb9HEnA8tARvf01pjpCMb_VnJS30k9iKQ"
        />
      </head>
      <body className="scroll-smooth">{children}</body>
    </html>
  );
}
