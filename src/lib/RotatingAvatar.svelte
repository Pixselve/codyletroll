<img class="rotating-avatar" src={imagePath} alt="rotating-avatar">

<script lang="ts">
  export let imagePath: string = "cody-o.png";
</script>

<style>
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

  .rotating-avatar {
    max-height: 50%;
    animation: rotate linear 3s infinite;
    margin-top: 50px;
  }
</style>
