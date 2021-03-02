<script lang="ts" context="module">
// the (optional) preload function takes a
// `{ path, params, query }` object and turns it into
// the data we need to render the page
export async function preload(page, session) {
  // the `slug` parameter is available because this file
  // is called [slug].svelte
  const { name }: { name: string } = page.params;

  // `this.fetch` is a wrapper around `fetch` that allows
  // you to make credentialled requests on both
  // server and client
  return { name: name.charAt(0).toUpperCase() + name.slice(1) };
}
</script>

<script lang="ts">
import Door from "../../components/Door.svelte";

export let name: string;

let isDoorOpened = false;


function openDoor() {
  isDoorOpened = true;
  new Audio("/codyfied/music.mp3").play();
}

</script>

<svelte:head>
  <title>{name} a quelque chose à vous dire</title>
  <meta name="title" content="{name} a quelque chose à vous dire">
  <meta name="description"
        content="Hey ! C'est moi {name}. J'ai vraiment envie de te dire quelque chose... Mais je t'avoue que je ne sais pas trop comment m'y prendre. ❤😘😍💋">
  <meta property="og:title" content="{name} a quelque chose à vous dire">
  <meta property="og:description" content="Hey ! C'est moi {name}. J'ai vraiment envie de te dire quelque chose... Mais je t'avoue que je ne sais pas trop comment m'y prendre. ❤😘😍💋">
  <meta property="twitter:title" content="{name} a quelque chose à vous dire">
  <meta property="twitter:description" content="Hey ! C'est moi {name}. J'ai vraiment envie de te dire quelque chose... Mais je t'avoue que je ne sais pas trop comment m'y prendre. ❤😘😍💋">
</svelte:head>

{#if isDoorOpened}
  <main class="reveal">


    <div class="title">{name} vous a Codysé !</div>
    <div class="subtitle">Gros bisous sur tes joues mon loulou</div>


    <img class="cody-face" src="cody-o.png" alt="">
  </main>
{:else}
  <main class="doorBackground">
    <Door color="#ff0" on:click={openDoor}/>
  </main>
{/if}


<style lang="scss">
  /* Start of text3d mixin */
  @mixin text3d($color: #ffd300, $x: 1, $y: -1,  $darken: 1) {
    color: $color;
    text-shadow: 0px 0px 0 darken($color, 14%),
    $x* 1px $y* 1px 0 darken($color, $darken * 15),
    $x* 2px $y* 2px 0 darken($color, $darken * 16),
    $x* 3px $y* 3px 0 darken($color, $darken * 17),
    $x* 4px $y* 4px 0 darken($color, $darken * 18),
    $x* 5px $y* 5px 0 darken($color, $darken * 19),
    $x* 6px $y* 6px 0 darken($color, $darken * 20),
    $x* 7px $y* 7px 0 darken($color, $darken * 21),
    $x* 8px $y* 8px 0 darken($color, $darken * 22),
    $x* 9px $y* 9px 0 darken($color, $darken * 23),
    $x* 10px $y* 10px 0 darken($color, $darken * 24),
    $x* 11px $y* 11px 0 darken($color, $darken * 25),
    $x* 12px $y* 12px 0 darken($color, $darken * 26),
    $x* 13px $y* 13px 12px rgba(0, 0, 0, 0.55),
    $x* 13px $y* 13px 1px rgba(0, 0, 0, 0.5);
  }

  @keyframes negativeMove {
    0% {
      transform: rotate(0) translateX(0);
    }
    25% {
      transform: rotate(0) translateX(-2rem);
    }
    75% {
      transform: rotate(0) translateX(2rem);
    }
    100% {
      transform: rotate(0) translateX(0);
    }
  }

  @keyframes positiveMove {
    0% {
      transform: rotate(0) translateX(0);
    }
    25% {
      transform: rotate(0) translateX(2rem);
    }
    75% {
      transform: rotate(0) translateX(-2rem);
    }
    100% {
      transform: rotate(0) translateX(0);
    }
  }


  .title {
    @include text3d(#00f7ff, 1, 1);
    font-size: 5rem;
    text-align: center;
    animation: linear infinite positiveMove 2s;
    max-width: 90%;
    @media screen and (max-width: 1024px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }    @media screen and (max-width: 425px) {
      font-size: 2rem;
    }

  }

  .subtitle {
    @include text3d(#ff00bf, 0.5, 0.5);
    font-size: 2rem;
    text-align: center;
    animation: ease-in-out infinite negativeMove 2s;
    max-width: 90%;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 394px) {
      font-size: 1rem;
    }
  }

  main {
    overflow: hidden;
    height: 100vh;
    width: 100%;
    background-color: #f1ff59;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &.doorBackground {
      background-color: #2E2345;
      background-image: url("/codyfied/background.svg");
    }

    &.reveal {

    }
  }

  .cody-face {
    max-height: 50%;
    animation: rotate linear 3s infinite;
    margin-top: 50px;

  }


  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
