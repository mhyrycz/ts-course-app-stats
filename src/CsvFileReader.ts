import fs from 'fs';

export class CsvFileReader {
	data: string[][] = [];
	constructor(public filename: string) {
        this.read()
    }

	read() {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8'
			})
			.split('\n')
			.map((match: string): string[] => {
				return match.split(',');
            });
            
	}
}
