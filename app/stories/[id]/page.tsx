import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteData } from "@/lib/data";
import StoryDetailClient from "./StoryDetailClient";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    return siteData.projects
        .filter((project) => project.universeContent.B)
        .map((project) => ({
            id: project.id,
        }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const project = siteData.projects.find(p => p.id === resolvedParams.id);
    const story = project?.universeContent.B;
    if (!story) return {};

    return {
        title: `${story.title} | Storytelling Portfolio`,
        description: story.hook,
        openGraph: {
            title: `${story.title} | Storytelling Portfolio`,
            description: story.hook,
            type: "article",
        }
    };
}

export default async function StoryPage({ params }: Props) {
    const resolvedParams = await params;
    const project = siteData.projects.find(p => p.id === resolvedParams.id);

    if (!project) return notFound();

    return <StoryDetailClient id={resolvedParams.id} />;
}
