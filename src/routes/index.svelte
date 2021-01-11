<style>

    img {
        animation: rotate linear 3s infinite;
        height: 50%;
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

    img:hover {
        cursor: pointer;
    }


</style>

<script lang="ts">
  let isHovered = false;
  $: path = isHovered ? "cody-o.png" : "cody-d.png"


</script>

<svelte:head>
  <title>Cody le troll</title>
</svelte:head>


<img on:mouseenter={() => {isHovered = true}} on:mouseleave={() => isHovered = false} src="{path}" alt="cody">

