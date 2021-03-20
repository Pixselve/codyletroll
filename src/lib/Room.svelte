<script lang="ts">
import Door from "./Door.svelte";
let isDoorOpened = false;

export let backgroundColor: string = "#f1ff59"
export let songPath: string = "/music.mp3"

function openDoor() {
  isDoorOpened = true;
  const audio = new Audio(songPath);
  audio.loop = true;
  audio.play();
}

</script>

{#if isDoorOpened}
  <main style="background-color: {backgroundColor}">
    <slot/>
  </main>
{:else}
  <main class="doorBackground">
    <Door color={backgroundColor} on:click={openDoor}/>
  </main>
{/if}

<style lang="scss">
  main {
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &.doorBackground {
      background-color: #2E2345;
      background-image: url("/background.svg");
    }

  }

</style>
