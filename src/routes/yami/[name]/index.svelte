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
  <title>{name} a quelque chose à vous chuchoter</title>
  <meta name="title" content="{name} a quelque chose à vous chuchoter">
  <meta name="description"
        content="Yo ! C'est moi {name}. J'ai vraiment envie de te dire quelque chose... Depêche toi de cliquer avant que je ne te goume !🔪">
  <meta property="og:title" content="{name} a quelque chose à vous chuchoter">
  <meta property="og:description"
        content="Yo ! C'est moi {name}. J'ai vraiment envie de te dire quelque chose... Depêche toi de cliquer avant que je ne te goume !🔪">
  <meta property="twitter:title" content="{name} a quelque chose à vous chuchoter">
  <meta property="twitter:description"
        content="Yo ! C'est moi {name}. J'ai vraiment envie de te dire quelque chose... Depêche toi de cliquer avant que je ne te goume !🔪">
</svelte:head>

<Room backgroundColor="#7EB260">
  <TextCustom color="#8428c9" x={1} y={1} size="5rem" move="-2rem">{name} vous a <b>YA</b>to<b>MI</b>sé !</TextCustom>
  <TextCustom color="#b05fed" x={0.5} y={0.5} size="2rem" move="2rem"> Je te demande de te préparer parce que je vais te GOUMER </TextCustom>
  <table style="width:90%">
    <tr>
      <th><RotatingAvatar imagePath="yami/avatar.png"/></th>
      <th><RotatingAvatar imagePath="yami/avatar.png"/></th>
      <th><RotatingAvatar imagePath="yami/avatar.png"/></th>
    </tr>
  </table>

</Room>


