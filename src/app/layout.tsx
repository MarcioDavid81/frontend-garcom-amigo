import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresco Pizzaria - A Melhor Pizzaria de São Paulo",
  description: "A Melhor Pizzaria de São Paulo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              backgroundColor: "#FF8800",
              color: "#292827",
              borderColor: "#292827",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
