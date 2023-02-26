<script lang="ts">
  import type { PageData } from "./$types";

  let name = `pseudoCool${Math.floor(Math.random() * 1000 + 1000)}`;
  export let data: PageData;
</script>

<svelte:head>
  <title>Cody le troll</title>
  <meta name="title" content="Cody le troll" />
  <meta
    name="description"
    content="Découvrez les pages de {data.pages
      .slice(0, 7)
      .map((el) => el.author)
      .join(', ')}..."
  />
  <meta property="og:title" content="Cody le troll" />
  <meta
    property="og:description"
    content="Découvrez les pages de {data.pages
      .slice(0, 7)
      .map((el) => el.author)
      .join(', ')}..."
  />
  <meta property="twitter:title" content="Cody le troll" />
  <meta
    property="twitter:description"
    content="Découvrez les pages de {data.pages
      .slice(0, 7)
      .map((el) => el.author)
      .join(', ')}..."
  />
  <meta property="og:image" content="/meta-image.webp" />
  <meta property="twitter:image" content="/meta-image.jpg" />
</svelte:head>

<div
  class="h-screen w-screen flex items-center flex-col justify-center content-center bg-cody"
>
  <h1 class="text-4xl sm:text-5xl text-gray-900 font-black mb-6 ">
    📄 Cody le troll
  </h1>
  <main
    class="bg-gray-800 text-white rounded-md shadow-2xl overflow-x-hidden overflow-y-auto"
  >
    <input
      maxlength="25"
      bind:value={name}
      placeholder="👤 Your name"
      class="bg-gray-600 p-6 w-full text-center"
      type="text"
    />
    <ul>
      <li>
        <a
          sveltekit:prefetch
          class="p-6 hover:bg-gray-700 cursor-pointer flex flex-row"
          href="/new"
        >
          <img class="h-6 mr-3" src="https://i.imgur.com/6kqJS7s.png" alt="" />
          <div>
            <span>Nouvelle page</span>
          </div>
        </a>
      </li>
      {#each data.pages as page}
        <li>
          <a
            sveltekit:prefetch
            class="p-6 hover:bg-gray-700 cursor-pointer flex flex-row"
            href={`/${page.author}/${name}`}
          >
            <img class="h-6 mr-3" src={page.imageURL} alt="" />
            <div>
              <span>/{page.author}/</span><span class="text-yellow-700"
                >{name}</span
              >
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </main>
</div>
