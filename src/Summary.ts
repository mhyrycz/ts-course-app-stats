import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';
import { ConsoleReport } from './reportTargets/ConsoleReport';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	static withHtmlReport(team: string): Summary {
		return new Summary(new WinsAnalysis(team), new HtmlReport());
	}

	static withConsoleReport(team: string): Summary {
		return new Summary(new WinsAnalysis(team), new ConsoleReport());
	}

	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

	buildAndPrintRepor(matches: MatchData[]) {
		const output = this.analyzer.run(matches);
		this.outputTarget.print(output);
	}
}
