import Link from "next/link";
import { Footer, Header } from "../common";

export function MainLayout({ children }) {
  return (
    <div>
      <Header />

      <div>
        <Link href="/">
          <a style={{ textDecorationLine: "underline" }}>Home</a>
        </Link>

        <Link href="/blog">
          <a style={{ textDecorationLine: "underline", marginLeft: "20px" }}>Blog</a>
        </Link>

        {children}
      </div>

      <Footer />
    </div>
  );
}
