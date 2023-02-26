<script lang="ts">
  import Room from "../../lib/Room.svelte";
  import TextCustom from "../../lib/TextCustom.svelte";
  import RotatingAvatar from "../../lib/RotatingAvatar.svelte";
  import type { Settings } from "../../lib/Settings";

  export let data: { settings: Settings };
  $: music = data.settings.music === "music" ? "/music.mp3" : "/music2.mp3";
</script>

<svelte:head>
  <title>{data.settings.title}</title>
  <meta name="title" content={data.settings.title} />
  <meta name="description" content={data.settings.description} />
  <meta property="og:title" content={data.settings.title} />
  <meta property="og:description" content={data.settings.description} />
  <meta property="twitter:title" content={data.settings.title} />
  <meta property="twitter:description" content={data.settings.description} />
  <meta property="og:image" content={data.settings.ogImage ?? ""} />
</svelte:head>

<Room songPath={music} backgroundColor={data.settings.backgroundColor}>
  <TextCustom
    color={data.settings.textMainColor}
    x={1}
    y={1}
    size="5rem"
    move="-2rem">{data.settings.textMainContent}</TextCustom
  >
  <TextCustom
    color={data.settings.textSecondaryColor}
    x={0.5}
    y={0.5}
    size="2rem"
    move="2rem">{data.settings.textSecondaryContent}</TextCustom
  >
  <RotatingAvatar imagePath={data.settings.imageURL} />
</Room>
