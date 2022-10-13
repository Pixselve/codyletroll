import * as Buffer from "buffer";

export async function load({ fetch, url }) {
  const base64 = url.searchParams.get("data");

  const b = Buffer.Buffer.from(base64, "base64");
  const s = b.toString();

  return {

    settings: JSON.parse(s),
    name: "custom"

  };


}
