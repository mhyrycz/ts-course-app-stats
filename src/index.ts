import { MatchReader, MatchData } from './Composition/MatchReader';
import { CsvFileReader } from './Composition/CsvFileReader';
import { MatchResult } from './MatchResult';

const csv = new CsvFileReader('./football.csv');

const newMatches = new MatchReader(csv);

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

console.log(newMatches.matches);
console.log(manUnitedWins(newMatches.matches));
