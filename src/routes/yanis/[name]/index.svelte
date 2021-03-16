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
  <title>{name} a quelque chose à vous dire</title>
  <meta name="title" content="{name} a besoin de ton aide">
  <meta name="description"
        content="Regardes là bas ! On dirais {name} en train de ramper, va vite l'aider !">
  <meta property="og:title" content="{name} a besoin de ton aide">
  <meta property="og:description"
        content="Regardes là bas ! On dirais {name} en train de ramper, va vite l'aider !">
  <meta property="twitter:title" content="{name} a besoin de ton aide">
  <meta property="twitter:description"
        content="Regardes là bas ! On dirais {name} en train de ramper, va vite l'aider !">
</svelte:head>

<Room backgroundColor="#0E0E0E">
  <TextCustom color="#C60B0B" x={1} y={1} size="5rem" move="-2rem">Noooon, c'était un piège !</TextCustom>
  <TextCustom color="#8615FF" x={0.5} y={0.5} size="2rem" move="2rem">Kh..! Maudit {name} ! Transgresser la convention de Genève de la sorte !</TextCustom>
  <TextCustom color="#8615FF" x={0.5} y={0.5} size="2rem" move="2rem">Fait attention ! Une marée de creepy crawlies approche ta position !</TextCustom>
  <RotatingAvatar imagePath="yanis/avatar.png"/>
</Room>
