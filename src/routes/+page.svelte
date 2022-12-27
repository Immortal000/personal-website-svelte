<script>
	import Project from '../components/project.svelte';
	export let data;

	const final_data = data['final_data'];
</script>

<div class="introduction_container">
	<h1>👋 Hi, Im Sid</h1>
	<p>... Paragraph about myself?</p>
</div>

<div class="project_container">
	<h1>💻 Projects</h1>
	<div class="row_1">
		{#each final_data.slice(0, 3) as project}
			<Project languages={project['languages']} url={project['url']} info={project} />
		{/each}
	</div>
	<div class="row_2">
		{#each final_data.slice(3, 7) as project}
			<Project languages={project['languages']} url={project['url']} info={project} />
		{/each}
	</div>
</div>

<div class="involvements_container">
	<h1>💼 Involvements</h1>
</div>

<style lang="scss">
	.project_container {
		div {
			flex-wrap: wrap;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
