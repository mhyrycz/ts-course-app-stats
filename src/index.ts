import { MatchReader, MatchData } from './MatchReader';
import { MatchResult } from './MatchResult';

const matches = new MatchReader('./football.csv');

const manUnitedWins = (matches: MatchData[]): string => {
	let wins = 0;
	for (let match of matches) {
		if (match[1] === 'Man United' && match[5] === MatchResult.HomeWins) {
			wins++;
		} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWins) {
			wins++;
		}
	}
	return `Man United won ${wins}`;
};

console.log(matches)
console.log(manUnitedWins(matches.data));
