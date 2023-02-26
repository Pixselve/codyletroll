import * as Buffer from "buffer";
import type { PageServerLoad } from "./$types";

export const load = (async ({ url }) => {
  const base64 = url.searchParams.get("data");
  if (!base64) {
    return {
      status: 400,
      body: "Missing data",
    };
  }

  const b = Buffer.Buffer.from(base64, "base64");
  const s = b.toString();

  return {
    settings: JSON.parse(s),
    name: "custom",
  };
}) satisfies PageServerLoad;
