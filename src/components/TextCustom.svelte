<p style="--moveValue: {move}; --fontSize: {size}; color: {color}; {getTextShadow()}">
  <slot/>
</p>

<style lang="scss">
  p {
    text-align: center;
    animation: linear infinite moveAnimation 2s;
    max-width: 90%;
    margin: 0;
    font-size: var(--fontSize);
    @media screen and (max-width: 1024px) {
      font-size: calc(0.75 * var(--fontSize));
    }
    @media screen and (max-width: 768px) {
      font-size: calc(0.5 * var(--fontSize));
    }
  }


  @keyframes moveAnimation {
    0% {
      transform: rotate(0) translateX(0);
    }
    25% {
      transform: rotate(0) translateX(calc(-1 * var(--moveValue)));
    }
    75% {
      transform: rotate(0) translateX(var(--moveValue));
    }
    100% {
      transform: rotate(0) translateX(0);
    }
  }

</style>

<script lang="ts">
export let x: number = 1;
export let y: number = 1;
export let color: string;
export let move: number = 2;
export let size: string = "5rem";

function LightenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = (num >> 8 & 0x00FF) + amt,
    G = (num & 0x0000FF) + amt;

  return (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
}

function getTextShadow(): string {
  let result = "text-shadow: ";
  for (let i = 0; i <= 12; i++) {
    result += `${ x * i }px ${ y * i }px 0 #${ LightenColor(color, -15 - i * 3) },`;
  }
  result += `${ x * 13 }px ${ y * 13 }px 12px rgba(0, 0, 0, 0.55),`;
  result += `${ x * 13 }px ${ y * 13 }px rgba(0, 0, 0, 0.55);`;
  return result;
}


</script>
