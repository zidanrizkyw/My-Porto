import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { homeVM } from "@/injector";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import ProjectHeader from "@/lib/project/views/ProjectHeader";
import ProjectDetail from "@/lib/project/views/ProjectDetail";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return homeVM.getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = homeVM.getProjectBySlug(slug);
  if (!project) return {};

  const t = await getTranslations({ locale, namespace: "projects" });
  const title = `${t(`items.${project.id}.title`)} — Zidan Rizky Wijaya`;
  const description = t(`items.${project.id}.description`);

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        "id-ID": `/id/projects/${slug}`,
        "en-US": `/en/projects/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      ...(project.image && { images: [{ url: project.image, width: 1440, height: 900 }] }),
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = homeVM.getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <MainLayout aside={<ProjectHeader project={project} />}>
      <ProjectDetail project={project} />
      <Footer />
    </MainLayout>
  );
}
