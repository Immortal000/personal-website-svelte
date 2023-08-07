import { Octokit } from 'octokit';

let default_user = 'immortal000';
import { GITHUB_KEY } from '$env/static/private';

let project_urls = [
	{
		user: 'aggie-coding-club',
		name: 'stock-trading-website',
		title: 'No Name',
		desc: '📈 Website to simulate stock trading'
	},
	{ user: default_user, name: 'uta-bot', title: 'Uta Bot', desc: '🎤 A karaoke bot for discord' },
	{
		user: 'mithunb9',
		name: 'nhssystem',
		title: 'NHS System',
		desc: '🏫 Website to check NHS eligbility for my high school'
	},
	{
		user: default_user,
		name: 'spell-bee',
		title: 'Spell bee',
		desc: '🐝 A spelling bee website that scrapes over 80 novels to find hard words to practice'
	},
	{
		user: default_user,
		name: 'covidhub-onehacks',
		title: 'Covid Hub',
		desc: '🦠 Post board for any important information based on the region'
	},
	{
		user: default_user,
		name: 'strpase',
		title: 'Strparse',
		desc: '🅰️ A string parsing module for npm'
	},
	{
		user: default_user,
		name: 'vuno',
		title: 'Uno',
		desc: '🎴🚧 Valorant themed UNO game KEKW'
	},
	{
		user: default_user, 
		name: 'personal-website-svelte', 
		title: 'Personal Website', 
		desc: '🕸️🚧 My personal website'
	}
];

const octokit = new Octokit({
	auth: GITHUB_KEY
});

const GITHUB_URI = 'https://github.com';

export const load = async ({ fetch }) => {
	let final_data = [];
	for (const project of project_urls) {
		const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
			owner: project['user'],
			repo: project['name']
		});
		const data = await response.data;

		let new_data = {
			url: `${GITHUB_URI}/${project['user']}/${project['name']}`,
			languages: data,
			...project
		};

		final_data.push(new_data);
	}

	// for (const project of project_urls) {
	// 	const data = { Python: 200, Javascript: 6000 };

	// 	let new_data = {
	// 		...project,
	// 		url: `${GITHUB_URI}/${project['user']}/${project['name']}`,
	// 		languages: data
	// 	};

	// 	final_data.push(new_data);
	// }

	return { final_data };
};
