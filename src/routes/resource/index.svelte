<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance } from '$lib/form';
</script>

<h1>Resource</h1>

<button on:click={() => goto(`/`)}>Invoke goto('/') directly works</button>

<h2>"Create" a new sub-resource:</h2>

<form
	action="/resource"
	method="post"
>
	<h2>Form post then redirect</h2>
	<button>submit</button>
</form>

<form
	action="/resource"
	method="post"
	use:enhance={{
		result: ({response}) => {
            console.log('goto response.url:', response.url);
			goto(response.url);
		}
	}}
>
	<h2>Enhanced form post then redirect</h2>
	<button>submit</button>
</form>

<form
	action="/resource"
	method="post"
	use:enhance={{
		result: ({response}) => {
            console.log('goto response.url:', response.url);
			setTimeout(() => goto(response.url));
		}
	}}
>
	<h2>Enhanced form post then redirect after timeout</h2>
	<button>submit</button>
</form>

<style>
    button, form {
        margin-bottom: 1rem;
    }

    form {
        border: 1px solid #333;
    }
</style>