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

        <Link href="/profile">
          <a style={{ textDecorationLine: "underline", marginLeft: "20px" }}>Profile</a>
        </Link>

        {children}
      </div>

      <Footer />
    </div>
  );
}
