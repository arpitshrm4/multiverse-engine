import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteData } from "@/lib/data";
import ProjectClient from "./ProjectClient";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    return siteData.projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const project = siteData.projects.find(p => p.id === resolvedParams.id);
    if (!project) return {};

    const content = project.universeContent.A;
    return {
        title: `${content.title} | Arpit Sharma Portfolio`,
        description: content.goal,
        openGraph: {
            title: `${content.title} | Arpit Sharma Portfolio`,
            description: content.goal,
            type: "article",
        }
    };
}

export default async function ProjectPage({ params }: Props) {
    const resolvedParams = await params;
    const project = siteData.projects.find(p => p.id === resolvedParams.id);

    if (!project) return notFound();

    return <ProjectClient id={resolvedParams.id} />;
}
