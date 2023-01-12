<script>
	import Project from '../components/project.svelte';
	import Involvement from '../components/involvement.svelte';
	export let data;

	const final_data = data['final_data'];
</script>

<div class="introduction_container">
	<h1>👋 Hi, Im Sid</h1>
	<p>
		I am a full time student and an aspiring Full Stack Developer with a keen interest in JavaScript
		frameworks
	</p>
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
	<div class="row_1">
		<Involvement
			image_source="example_1.jpg"
			title="Blockchain keyboard"
			desc="⌨️ The terminal’s intuitive user interface enables users to analyze crypto the same 
			way they see stocks and bonds and the revolutionary keyboard brings the immense 
			breadth of the blockchain to users' fingertips."
			url="https://blockchainkeyboard.io/#"
			position="Full Stack Developer"
		/>
		<Involvement
			image_source="example_1.jpg"
			title="Standard Financial"
			desc="📊 StandardFinancial, a fintech organization, has pioneered a cost-effective way 
			of obtaining the same 
			full market coverage large institutions profit billions from. 
			The company's low cost solution for financial data can save institutional 
			investors thousands each month."
			position="Full Stack Developer"
		/>
		<Involvement
			image_source="example_1.jpg"
			title="Aggie Coding Club"
			desc="🧑‍💻 Aggie Coding Club provides the students of Texas A&M University that are interested 
			in software development the opportunity to explore their careers and passions 
			through projects, meetings, and workshops. The club also provides a community 
			where members can benefit from valuable networking opportunities and learn from each other."
			url="http://www.aggiecodingclub.com/"
			position="Project Manager"
		/>
	</div>
	<!-- <div class="row_1">
		<Involvement />
		<Involvement />
		<Involvement />
	</div> -->
</div>

<style lang="scss">
	.row_1,
	.row_2 {
		flex-wrap: wrap;
		display: flex;
		justify-content: space-between;
	}
</style>
