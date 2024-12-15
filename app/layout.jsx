import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import StoreProvider from "./StoreProvider";
// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-notoSansJp"

});

export const metadata = {
  title: "JPFlash",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSansJp.variable}>
        <StoreProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </StoreProvider>
      </body>
    </html>
  );
}
