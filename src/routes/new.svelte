<h1>New page</h1>

<form on:submit|preventDefault="{submit}">
    <input bind:value={form_data.textMainContent} type="text" placeholder="text 1">
    <input bind:value={form_data.textSecondaryContent} type="text" placeholder="text 2">
    <input bind:value={form_data.textMainColor} type="color" placeholder="color 1">
    <input bind:value={form_data.textSecondaryColor} type="color" placeholder="color 2">

    <input bind:value={form_data.imageURL} type="text" placeholder="image URL">

    <input bind:value={form_data.title} type="text" placeholder="title">

    <input bind:value={form_data.description} type="text" placeholder="description">
    <button type="submit">New page</button>
</form>

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
        goto(`/custom/${base64EncodedData}`)
    }

</script>