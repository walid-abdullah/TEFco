// Turns a YouTube or Vimeo link into its autoplaying embed URL. Returns null for anything else.
export function getEmbedUrl(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const youtube = (id) => `https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`;
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.searchParams.has("v")) return youtube(parsed.searchParams.get("v"));
      const short = parsed.pathname.match(/^\/(?:shorts|embed)\/([^/]+)/);
      return short ? youtube(short[1]) : null;
    }
    if (parsed.hostname.includes("youtu.be")) return youtube(parsed.pathname.slice(1));
    if (parsed.hostname.includes("vimeo.com")) {
      return `https://player.vimeo.com/video/${parsed.pathname.split("/").pop()}?autoplay=1&title=0&byline=0&portrait=0`;
    }
  } catch {
    return null;
  }
  return null;
}
