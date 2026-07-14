"use client";

import { useUniverse } from "@/context/UniverseContext";
import { siteData } from "@/lib/data";
import StoryPage from "@/components/universe-b/StoryPage";
import { notFound } from "next/navigation";
import { useEffect } from "react";

export default function StoryDetailPage({ params }: { params: { id: string } }) {
    const { setUniverse } = useUniverse();
    const project = siteData.projects.find(p => p.id === params.id);
    const story = project?.universeContent.B;

    useEffect(() => {
        setUniverse('B');
    }, [setUniverse]);

    if (!story) {
        notFound();
    }

    return <StoryPage story={story} />;
}
