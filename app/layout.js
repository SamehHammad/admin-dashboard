import { Inter } from "next/font/google";
import "@/app/ui/globals.css";
import ModeProvider from "./ModeContext/ModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Sameh Hammad Next.js Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <ModeProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ModeProvider>
  );
}
