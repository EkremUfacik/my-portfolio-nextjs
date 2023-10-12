import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import Providers from "../providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "eU",
  description: "Ekrem's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
