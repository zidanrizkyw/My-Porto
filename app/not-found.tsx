import Link from "next/link";
import { jakarta } from "./fonts";
import "./globals.css";

// Requests outside the [locale] segment never reach the locale layout,
// so this page renders its own document.
export default function NotFound() {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="flex min-h-screen flex-col items-center justify-center px-6 text-center font-sans antialiased">
        <p className="text-sm font-semibold tracking-widest text-accent">404</p>
        <h1 className="mt-2 text-3xl font-bold text-heading">Halaman Tidak Ditemukan</h1>
        <Link href="/id" className="mt-8 font-semibold text-heading hover:text-accent">
          ← Kembali ke Beranda
        </Link>
      </body>
    </html>
  );
}
