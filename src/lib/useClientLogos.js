"use client";

import { useEffect, useState } from "react";
import { clientLogos } from "@/data/clientLogos";
import { client } from "@/sanity/client";
import { LOGOS_QUERY, mergeClientLogos } from "@/sanity/content";

// Shows the logos in the code straight away, then adds any from Sanity.
export function useClientLogos() {
  const [logos, setLogos] = useState(clientLogos);

  useEffect(() => {
    let isCurrent = true;
    client.fetch(LOGOS_QUERY).then((sanityLogos) => {
      if (isCurrent) setLogos(mergeClientLogos(sanityLogos));
    }).catch(() => {});
    return () => { isCurrent = false; };
  }, []);

  return logos;
}
