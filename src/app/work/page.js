import WorkGallery from "@/components/WorkGallery";
import { client } from "@/sanity/client";
import { WORK_QUERY, toWorkProject } from "@/sanity/content";

// New videos from Sanity appear within a minute.
export const revalidate = 60;

export default async function WorkPage() {
  let sanityProjects = [];
  try {
    sanityProjects = (await client.fetch(WORK_QUERY)).map(toWorkProject);
  } catch (error) {
    console.error("Work content fetch failed:", error);
  }
  return <WorkGallery sanityProjects={sanityProjects} />;
}
