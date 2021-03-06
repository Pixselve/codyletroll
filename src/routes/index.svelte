<style>

    img {
        animation: rotate linear 3s infinite;
        height: 50%;
    }



    img:hover {
        cursor: pointer;
    }

    main {
        overflow: hidden;
        height: 100vh;
        width: 100%;
        background-color: #f1ff59;
        display: flex;
        align-items: center;
        justify-content: center;
    }


</style>

<script lang="ts">
let isHovered = false;
$: path = isHovered ? "cody-o.png" : "cody-d.png";


</script>

<svelte:head>
  <title>Cody le troll</title>
</svelte:head>

<main>
  <img on:mouseenter={() => {isHovered = true}} on:mouseleave={() => isHovered = false} src="{path}" alt="cody">
</main>



