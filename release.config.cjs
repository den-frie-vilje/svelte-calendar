const npm = [
	'@semantic-release/npm',
	{
		pkgRoot: 'package'
	}
];
module.exports = {
	branches: ['master'],
	verifyConditions: [
		'@semantic-release/changelog',
		'@semantic-release/npm',
		'@semantic-release/git'
	],
	prepare: [
		'@semantic-release/changelog',
		'@semantic-release/npm',
		{
			path: '@semantic-release/git',
			assets: ['docs', 'package.json', 'package-lock.json', 'CHANGELOG.md'],
			message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
		}
	],
	publish: [npm, '@semantic-release/github']
};
