import type { PageServerLoad } from "./$types";
import pages from "$lib/pages.json";

export const load = (async () => {
  let result: { author: string; imageURL: string }[] = [];
  for (const pagesKey in pages) {
    result = [
      ...result,
      {
        imageURL: pages[pagesKey as keyof typeof pages].imageURL,
        author: pagesKey,
      },
    ];
  }
  return { pages: result };
}) satisfies PageServerLoad;
