<script lang="ts">
  export let imagePath: string = "cody-o.png";
</script>

<img
  class="rotating-avatar h-1/3 mt-20"
  src={imagePath}
  alt="rotating-avatar"
/>

<style>
  .rotating-avatar {
    animation: rotate linear 3s infinite;
  }
</style>
