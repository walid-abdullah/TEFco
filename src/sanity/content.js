import { clientLogos } from "@/data/clientLogos";
import { urlFor } from "./client";

const LOGO_HEIGHT = 96;
const WORK_IMAGE_WIDTH = 1200;

// The fields each page needs, so a request never downloads whole documents.
const WORK_FIELDS = `_id, title, clientName, category, orientation, videoUrl, thumbnail`;
const HAS_VIDEO = `defined(videoUrl) && videoUrl != ""`;

export const WORK_QUERY = `*[_type == "portfolio" && ${HAS_VIDEO}] | order(order asc, _createdAt desc) { ${WORK_FIELDS} }`;
export const LOGOS_QUERY = `*[_type == "clientLogo" && defined(logo.asset)] | order(order asc) { _id, name, logo }`;

// Older entries used these category values.
const CATEGORY_ALIASES = { podcasts: "podcast", ugc: "promo" };
const CATEGORY_LABELS = { podcast: "Podcast", "talking-head": "Talking head", reels: "Reels & shorts", saas: "Motion graphics", promo: "Paid creative" };

function youtubeThumbnail(videoUrl) {
  const id = String(videoUrl).match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{6,})/)?.[1];
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

export function toWorkProject(doc) {
  const category = CATEGORY_ALIASES[doc.category] || doc.category;
  const isPortrait = doc.orientation ? doc.orientation === "portrait" : category === "reels";
  return {
    id: doc._id,
    category,
    label: CATEGORY_LABELS[category] || "Selected work",
    client: doc.clientName || CATEGORY_LABELS[category] || "",
    title: doc.title,
    videoUrl: doc.videoUrl,
    ratio: isPortrait ? "9 / 16" : "16 / 9",
    image: doc.thumbnail?.asset ? urlFor(doc.thumbnail).width(WORK_IMAGE_WIDTH).auto("format").url() : youtubeThumbnail(doc.videoUrl),
  };
}

// Logos prepared in the code come first. Logos added in Sanity join them, unless the name already exists.
export function mergeClientLogos(sanityLogos = []) {
  const known = new Set(clientLogos.map((logo) => logo.name.toLowerCase()));
  const added = sanityLogos
    .filter((logo) => logo?.logo?.asset && !known.has((logo.name || "").toLowerCase()))
    .map((logo) => ({ name: logo.name || "Client logo", src: urlFor(logo.logo).height(LOGO_HEIGHT).auto("format").url(), raw: true }));
  return [...clientLogos, ...added];
}
