<img class="rotating-avatar" src={imagePath} alt="rotating-avatar">

<script lang="ts">
  export let imagePath: string = "cody-o.png";
</script>

<style>
  .rotating-avatar {
    max-height: 50%;
    animation: rotate linear 3s infinite;
    margin-top: 50px;
  }
</style>
