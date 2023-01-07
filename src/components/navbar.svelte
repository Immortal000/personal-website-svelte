<script>
	import Fa from 'svelte-fa';
	import { faInbox } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	const redirect = (url) => {
		window.open(url);
	};
</script>

<div class="container">
	<div class="links">
		<ul>
			<li>Home</li>
			<li>Projects</li>
		</ul>
	</div>
	<div class="contacts">
		<ul>
			<li
				on:click={() => {
					redirect('https://www.linkedin.com/in/siddarth-kotthur-5a098a1a2/');
				}}
				on:keydown={() => {
					redirect('https://www.linkedin.com/in/siddarth-kotthur-5a098a1a2/');
				}}
			>
				<Fa icon={faLinkedin} />
			</li>
			<li
				on:click={() => {
					redirect('mailto:kotthursiddarth@gmail.com');
				}}
				on:keydown={() => {
					redirect('mailto:kotthursiddarth@gmail.com');
				}}
			>
				<Fa icon={faInbox} />
			</li>
			<li
				on:click={() => {
					redirect('https://github.com/Immortal000');
				}}
				on:keydown={() => {
					redirect('https://github.com/Immortal000');
				}}
			>
				<Fa icon={faGithub} />
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	.container {
		width: 95%;
		margin: auto;
		display: flex;
		justify-content: space-between;

		ul {
			list-style: none;
			display: flex;
			padding: 0;

			li {
				margin: 0 10px;
			}
		}
	}
</style>
