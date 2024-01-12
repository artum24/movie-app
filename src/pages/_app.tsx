import "../../app/globals.css";
import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { Header } from "@app/components/Header/Header";
import dayjs from "dayjs";
import ukLocale from "dayjs/locale/uk";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  dayjs.locale(ukLocale);

  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
