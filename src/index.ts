import { CsvFileReader } from './CsvFileReader';

const matches = new CsvFileReader('./football.csv');

enum MatchResult {
	HomeWins = 'H',
	AwayWins = 'A',
	Draw = 'D'
}

const manUnitedWins = (matches: string[][]): number => {
	let wins = 0;
	for (let match of matches) {
		if (match[1] === 'Man United' && match[5] === MatchResult.HomeWins) {
			wins++;
		} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWins) {
			wins++;
		}
	}
	return wins;
};

console.log(manUnitedWins(matches.data));
