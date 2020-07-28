import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const matches = new CsvFileReader('./football.csv');

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

console.log(matches)
