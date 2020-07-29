import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const csv = new CsvFileReader('./football.csv');

const newCSVMatches = new MatchReader(csv);

const ManUnitedAnalysis = new WinsAnalysis('Everton');

const newConsoleReport = new ConsoleReport();

const newConsoleSummary = new Summary(ManUnitedAnalysis, newConsoleReport);

console.log(newConsoleSummary.buildAndPrintRepor(newCSVMatches.matches));
