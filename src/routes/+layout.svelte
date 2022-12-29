<script>
	import '../app.scss';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Navbar />

<div>
	<slot />
</div>

<Footer />

<style>
	div {
		width: 90%;
		margin: auto;
	}
</style>
