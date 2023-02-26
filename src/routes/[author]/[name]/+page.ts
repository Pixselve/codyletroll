import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { Settings } from "../../../lib/Settings";
import jsonPage from "../../../lib/pages.json";

export const load = (async ({ params }) => {
  const author = params.author;
  const name = params.name;
  // check if the page exists
  if (author in jsonPage) {
    const authorPages = jsonPage[author as keyof typeof jsonPage];
    //replace $name in each property of the object with the name parameter
    const page = Object.fromEntries(
      Object.entries(authorPages).map(([key, value]) => [
        key,
        value.replace("$name", name),
      ])
    ) as unknown as Settings;

    return {
      name: name,
      settings: page,
    };
  }
  throw error(404, "Page not found");
}) satisfies PageLoad;
