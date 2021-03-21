<script context="module" lang="ts">
export const prerender = true;


export async function load({ fetch, page }) {
  const res = await fetch(`/${ page.params.author }/${ page.params.name }.json`);
  if (res.ok) {
    return {
      props: {
        settings: await res.json(),
        name: page.params.name
      }
    };
  } else {
    return {
      status: 404,
      error: new Error(`Page not found`)
    };
  }

}
</script>

<script lang="ts">
import type { Settings } from "../../_pages";
import Room from "../../../lib/Room.svelte";
import TextCustom from "../../../lib/TextCustom.svelte";
import RotatingAvatar from "../../../lib/RotatingAvatar.svelte";

export let settings: Settings;
export let name: String;
</script>

<svelte:head>
  <title>{settings.title}</title>
  <meta name="title" content="{settings.title}">
  <meta name="description" content="{settings.description}">
  <meta property="og:title" content="{settings.title}">
  <meta property="og:description" content="{settings.description}">
  <meta property="twitter:title" content="{settings.title}">
  <meta property="twitter:description" content="{settings.description}">
</svelte:head>

<Room backgroundColor={settings.backgroundColor}>
  <TextCustom color={settings.textMainColor} x={1} y={1} size="5rem"
              move="-2rem">{settings.textMainContent}</TextCustom>
  <TextCustom color={settings.textSecondaryColor} x={0.5} y={0.5} size="2rem"
              move="2rem">{settings.textSecondaryContent}</TextCustom>
  <RotatingAvatar imagePath={settings.imageURL}/>
</Room>
