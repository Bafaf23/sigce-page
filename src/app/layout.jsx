import "@/globals.css";

export const metadata = {
  title: "Sigce",
  description: "Sigce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
