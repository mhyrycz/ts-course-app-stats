import fs from 'fs';

const matches = fs
	.readFileSync('football.csv', {
		encoding: 'utf-8'
	})
	.split('\n')
	.map((match: string): string[] => {
		return match.split(',');
	});

const manUnitedWins = (matches: string[][]): number => {
    let wins = 0
    for(let match of matches) {
        if(match[1] === "Man United" && match[5] === "H"){
            wins++
        } else if(match[2] === "Man United" && match[5] === "A"){
            wins++
        }
    }
    return wins
}

console.log((manUnitedWins(matches))


