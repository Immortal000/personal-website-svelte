<script>
	import Bar from './bar.svelte';

	export let languages;
	export let url;
	export let info;

	const language_count = {};

	const redirect = () => {
		window.open(url);
	};

	let languages_total_lines = 0;

	for (const language of Object.keys(languages)) {
		languages_total_lines += languages[language];
	}

	for (const language of Object.keys(languages)) {
		let perc = (languages[language] / languages_total_lines) * 100;
		language_count[language] = perc.toFixed(2);
	}
</script>

<div class="project" on:click={redirect} on:keydown={redirect}>
	<p class="title">{info['title']}</p>
	<p class="desc">{info['desc']}</p>

	<Bar languages={language_count} />

	<!-- <div class="languages">
		{#each Object.keys(language_count) as language}
			<p>{language}:{language_count[language]}%</p>
		{/each}
	</div> -->
</div>

<style lang="scss">
	.project {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 5px;
		line-height: 15px;
		background-color: #272726;
		color: white;
		flex: 1 1 0px;
		margin: 1%;
		padding: 10px;
		.title {
			color: #60a5fa;
			font-weight: bold;
		}

		.desc {
			line-height: 18px;
		}
	}
</style>
