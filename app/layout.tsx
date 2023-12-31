import type { Metadata } from "next";
import { Inter, Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Todo List App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
