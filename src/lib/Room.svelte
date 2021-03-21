<script lang="ts">
import Door from "./Door.svelte";

let isDoorOpened = false;
import { onMount } from 'svelte';


export let backgroundColor: string = "#f1ff59";
export let songPath: string = "/music.mp3";

function openDoor() {
  isDoorOpened = true;
  const audio = new Audio(songPath);
  audio.loop = true;
  audio.play();
}


export let emojis = ['😘', '❤', '💋'];

let confetti = new Array(100).fill(undefined, undefined, undefined)
  .map((_, i) => {
    return {
      character: emojis[i % emojis.length],
      x: Math.random() * 100,
      y: -20 - Math.random() * 100,
      r: 0.1 + Math.random() * 1
    };
  })
  .sort((a, b) => a.r - b.r);

onMount(() => {
  let frame;

  function loop() {
    frame = requestAnimationFrame(loop);

    confetti = confetti.map(emoji => {
      emoji.y += 0.7 * emoji.r;
      if (emoji.y > 120) emoji.y = -20;
      return emoji;
    });
  }

  loop();

  return () => cancelAnimationFrame(frame);
});

</script>


{#if isDoorOpened}
  <main style="background-color: {backgroundColor}"
        class="overflow-hidden h-screen w-full flex items-center content-center flex-col">
    {#each confetti as c}
        <span class="absolute text-5xl select-none"
              style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span>
    {/each}
    <slot/>
  </main>

{:else}
  <main class="doorBackground bg-[#2E2345] overflow-hidden h-screen w-full flex items-center justify-center flex-col">
    <Door color={backgroundColor} on:click={openDoor}/>
  </main>
{/if}


<style lang="scss">
  .doorBackground {
    background-image: url("/background.svg");
  }


</style>
