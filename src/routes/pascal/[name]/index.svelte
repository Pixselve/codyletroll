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
	  <meta name="title" content="{name} a quelque chose à vous dire">
	  <meta name="description"
			content="Hey ! C'est moi {name}. J'ai vraiment envie de te dire quelque chose... Mais je t'avoue que je ne sais pas trop comment m'y prendre. ❤😘😍💋">
	  <meta property="og:title" content="{name} a quelque chose à vous dire">
	  <meta property="og:description"
			content="Hey ! C'est moi {name}. J'ai vraiment envie de te dire quelque chose... Mais je t'avoue que je ne sais pas trop comment m'y prendre. ❤😘😍💋">
	  <meta property="twitter:title" content="{name} a quelque chose à vous dire">
	  <meta property="twitter:description"
			content="Hey ! C'est moi {name}. J'ai vraiment envie de te dire quelque chose... Mais je t'avoue que je ne sais pas trop comment m'y prendre. ❤😘😍💋">
</svelte:head>
	
<Room backgroundColor="#73b0af">
	<TextCustom color="#16e7fa" x={1} y={1} size="5rem" move="-2rem">{name} vous a kidnappé dans sa cave à Lolis !</TextCustom>
	<TextCustom color="#b5f9ff" x={0.5} y={0.5} size="2rem" move="2rem">Tu peux crier comme tu veux, personne ne t'entendra dans mes plantations à Lolis</TextCustom>
	<RotatingAvatar imagePath="pascal/avatar.png"/>
</Room>
	
	
	