<script>
	export let languages;

	const colors = {
		Python: 'blue',
		JavaScript: 'yellow',
		Vue: 'green',
		CSS: 'purple',
		HTML: 'orange'
	};

	// for (var i = 0; i < 7; i++) {
	// 	colors.push(Math.floor(Math.random() * 255));
	// }
</script>

<div class="container">
	<div class="progress_bar">
		{#each Object.keys(languages) as language}
			<div
				class="language_progress"
				style="--progress-width: {languages[language]}%; --back-color: {colors[language]};"
			>
				<!-- {language} -->
			</div>
		{/each}
	</div>

	<div class="bar_legend">
		{#each Object.keys(languages) as language}
			<div class="legend">
				<div class="language_legend" style="--back-color: {colors[language]};" title={language} />
				<p class="language_text">{language}</p>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.progress_bar {
		color: black;
		overflow: hidden;
		border-radius: 8px;
		background-color: white;
		height: 10px;
		width: 100%;
		display: flex;

		.language_progress {
			width: var(--progress-width);
			background-color: var(--back-color);
			height: 10px;
		}
	}
	.bar_legend {
		display: flex;
		flex-wrap: wrap;
		margin: auto;
		.legend {
			position: relative;
			display: flex;
			margin: auto;
			text-align: center;

			.language_legend {
				margin: auto;
				width: 15px;
				height: 15px;
				background-color: var(--back-color);
				border-radius: 50%;
			}

			.language_text {
				margin-left: 5px;
			}
		}
	}
</style>
