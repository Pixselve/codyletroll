import { error } from "@sveltejs/kit";
import pages, { Settings } from "$lib/pages";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  if (params.author in pages) {
    const page: Settings = JSON.parse(JSON.stringify(pages[params.author]));
    for (const pageKey in page) {
      if (page.hasOwnProperty(pageKey) && typeof page[pageKey] === "string") {
        page[pageKey] = page[pageKey].replace("$name", params.name);
        page[pageKey] = page[pageKey].replace("$author", params.author);
      }
    }

    console.log(page);
    return {

      settings: page,
      name: params.name

    };
  }

  throw error(404, "Page not found");
}
