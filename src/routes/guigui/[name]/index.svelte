<script lang="ts" context="module">
export async function preload(page) {
  const { name }: { name: string } = page.params;
  return { name: name.charAt(0).toUpperCase() + name.slice(1) };
}
</script>

<script lang="ts">
import TextCustom from "../../../components/TextCustom.svelte";
import RotatingAvatar from "../../../components/RotatingAvatar.svelte";
import Room from "../../../components/Room.svelte";

export let name: string;
</script>

<svelte:head>
  <title>{name} a quelque chose à vous livrer</title>
  <meta name="title" content="Toc toc toc !">
  <meta name="description"
        content="J'ai un colis de la part de {name} !">
  <meta property="og:title" content="Toc toc toc !">
  <meta property="og:description"
        content="J'ai un colis de la part de {name} !">
  <meta property="twitter:title" content="Toc toc toc !">
  <meta property="twitter:description"
        content="J'ai un colis de la part de {name} !">
</svelte:head>

<Room songPath="guigui/theme.mp3" backgroundColor="#99c9ff">
  <TextCustom color="#fc03ba" x={1} y={1} size="5rem" move="-2rem">Eh non, c'est toi qui t'es fait livré par {name} !</TextCustom>
  <TextCustom color="#f0fc03" x={0.5} y={0.5} size="2rem" move="2rem">Guigui's Delivery Service à la rescousse</TextCustom>
  <RotatingAvatar imagePath="guigui/avatar.png"/>
</Room>


