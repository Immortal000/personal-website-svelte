<script>
	export let image_source;
	export let title;
	export let desc;
	export let url;
	export let position;

	const redirect = () => {
		if (url != undefined) {
			window.open(url);
		}
	};
</script>

<div class="involvement_container" on:click={redirect} on:keydown={redirect}>
	<div class="image_container">
		<img src={'/' + image_source} alt="" srcset="" />
	</div>
	<div class="text_container">
		<p class="title">{title}</p>
		<p class="title">Position: {position}</p>
		<p>{desc}</p>
	</div>
</div>

<style lang="scss">
	.involvement_container {
		flex: 1 1 0px;
		margin: 1%;
		border-radius: 5px;
		background-color: #272726;
		cursor: pointer;

		.text_container {
			padding: 10px;

			.title {
				color: #60a5fa;
				font-weight: bold;
			}
		}

		.image_container {
			width: 100%;
			height: 250px;
			border-radius: 5px;

			img {
				min-width: 100%;
				height: 250px;
				object-fit: cover;
				border-radius: 5px 5px 0px 0px;
			}
		}
	}
	.involvement_container:hover {
		scale: 1.05;
	}
</style>
