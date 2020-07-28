import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

//tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader {
	abstract mapRow(row: string[]): MatchData;

	data: MatchData[] = [];

	constructor(public filename: string) {
		this.read();
	}

	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8'
			})
			.split('\n')
			.map((match: string): string[] => {
				return match.split(',');
			})
			.map(this.mapRow);
	}
}

export class MatchReader extends CsvFileReader {
	constructor(filename: string) {
		super(filename);
		this.read();
	}

	mapRow(row: string[]): MatchData {
		return [
			dateStringToDate(row[0]),
			row[1],
			row[2],
			parseInt(row[3]),
			parseInt(row[4]),
			row[5] as MatchResult, //Type assertion
			row[6]
		];
	}
}
