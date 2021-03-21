<img class="rotating-avatar h-1/2 mt-15" src={imagePath} alt="rotating-avatar">

<script lang="ts">
export let imagePath: string = "cody-o.png";
</script>

<style>
    .rotating-avatar {
        animation: rotate linear 3s infinite;
    }
</style>
