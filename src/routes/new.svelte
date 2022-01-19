
<div class="h-screen w-screen flex items-center flex-col justify-center content-center bg-cody">
<form on:submit|preventDefault="{submit}" class="p-5 space-y-5">
    <h1 class="text-2xl font-bold">Nouvelle page</h1>
    <div>
        <label for="text1" class="font-bold">Texte principal</label>
        <input name="text1" class="bg-gray-200 border border-gray-300 p-4 rounded-lg  w-full " bind:value={form_data.textMainContent} type="text" >
    </div>

    <div>
        <label for="text2" class="font-bold">Texte secondaire</label>
        <input name="text2" class="bg-gray-200 border border-gray-300 p-4 rounded-lg  w-full " bind:value={form_data.textSecondaryContent} type="text" >
    </div>


    <div>
        <label for="color1" class="font-bold">Couleur texte principal</label>
        <input name="color1" class="bg-gray-200 border border-gray-300 p-4 rounded-lg  w-full " bind:value={form_data.textMainColor} type="color">
    </div>

    <div>
        <label for="color2" class="font-bold">Couleur texte secondaire</label>
        <input name="color2" class="bg-gray-200 border border-gray-300 p-4 rounded-lg  w-full " bind:value={form_data.textSecondaryColor} type="color">
    
    </div>

    <div>
        <label for="bg" class="font-bold">Couleur arrière-plan</label>
        <input name="bg" class="bg-gray-200 border border-gray-300 p-4 rounded-lg  w-full " bind:value={form_data.backgroundColor} type="color">
    </div>


    <div>
        <label for="img" class="font-bold">URL vers l'image</label>
        <input name="img" class="bg-gray-200 border border-gray-300 p-4 rounded-lg  w-full " bind:value={form_data.imageURL} type="text">
    </div>

    <div>
        <label for="title" class="font-bold">Titre de la page</label>
        <input name="title" class="bg-gray-200 border border-gray-300 p-4 rounded-lg  w-full " bind:value={form_data.title} type="text">
    </div>

    <div>
        <label for="description" class="font-bold">Description de la page</label>
        <input name="description" class="bg-gray-200 border border-gray-300 p-4 rounded-lg  w-full " bind:value={form_data.description} type="text">
    </div>


    <button class="bg-green-500 p-4 w-full rounded-lg text-white" type="submit">Valider</button>
</form>
</div>

<script lang="ts">
    import {
	goto,
} from '$app/navigation';
import type { Settings } from './_pages';

    let form_data: Settings = {
    backgroundColor: '',
    textMainColor: '',
    textMainContent: '',
    textSecondaryColor: '',
    textSecondaryContent: '',
    imageURL: '',
    title: '',
    description: ''
}

    function submit() {
        const base64EncodedData = window.btoa(unescape(encodeURIComponent( JSON.stringify(form_data) )));
        goto(`/custom?data=${base64EncodedData}`)
    }

</script>