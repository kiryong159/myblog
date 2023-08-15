import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Blog",
  description: "나의 메모장 같은곳",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav child={children} />
      </body>
    </html>
  );
}
