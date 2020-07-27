import fs from 'fs';

const matches = fs
	.readFileSync('football.csv', {
		encoding: 'utf-8'
	})
	.split('\n')
	.map((match: string): string[] => {
		return match.split(',');
	});

console.log(matches);
