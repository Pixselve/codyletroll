<img on:click={forward} on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false} class="door"
     src={isHovered ? "/codyfied/door-open.svg" : "/codyfied/door-close.svg"} alt="door">


<style lang="scss">
  .door {
    max-height: 40%;
    cursor: pointer;
  }
</style>

<script lang="ts">
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();
let isHovered = false;

function forward(event) {
  dispatch('click', event.detail);
}
</script>
