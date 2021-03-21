import pages from "../../_pages";
import type { Settings } from "../../_pages";

export function get({ params }) {

  if (params.author in pages) {
    const page: Settings = JSON.parse(JSON.stringify(pages[params.author]));
    for (let pageKey in page) {
      if (page.hasOwnProperty(pageKey) && typeof page[pageKey] === "string") {
        page[pageKey] = page[pageKey].replace("$name", params.name);
        page[pageKey] = page[pageKey].replace("$author", params.author);
      }
    }
    return {
      body: page
    };
  }

  return {
    status: 404,
    body: {
      error: 'Not found'
    }
  };
}
