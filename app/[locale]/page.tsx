import { setRequestLocale } from "next-intl/server";
import About from "@/lib/home/views/About";
import Experience from "@/lib/home/views/Experience";
import Projects from "@/lib/home/views/Projects";
import Credentials from "@/lib/home/views/Credentials";
import Footer from "@/components/layout/Footer";
import MainLayout from "@/components/layout/MainLayout";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <MainLayout>
      <About />
      <Experience />
      <Projects />
      <Credentials />
      <Footer />
    </MainLayout>
  );
}
