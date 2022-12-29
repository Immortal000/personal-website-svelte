<script>
	export let languages;

	const colors = {
		Python: 'blue',
		JavaScript: 'yellow',
		Vue: 'green',
		CSS: 'purple',
		HTML: 'orange'
	};
</script>

<div class="border_container">
	<div class="progress_border">
		{#each Object.keys(languages) as language}
			<div
				class="language_progress"
				style="--progress-width: {languages[language]}%; --back-color: {colors[language]};"
			>
				<!-- {language} -->
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.progress_border {
		overflow: hidden;
		border-radius: 8px;
		background-color: white;
		height: 100px;
		overflow: hidden;
		width: 100%;
		display: flex;

		.language_progress {
			width: var(--progress-width);
			background-color: var(--back-color);
			height: 100%;
		}
	}
</style>
