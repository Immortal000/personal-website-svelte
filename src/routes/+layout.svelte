<script>
	import '../app.scss';
	import Navbar from '../components/navbar.svelte';
</script>

<Navbar />

<div>
	<slot />
</div>

<style>
	div {
		width: 90%;
		margin: auto;
	}
</style>
