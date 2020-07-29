import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

const csv = new CsvFileReader('./football.csv');

const newCSVMatches = new MatchReader(csv);

const ManUnitedAnalysis = new WinsAnalysis('Everton');

const newConsoleReport = new ConsoleReport();
const newHtmlReport = new HtmlReport();

const newConsoleSummary = new Summary(ManUnitedAnalysis, newConsoleReport);
const newHtmlSummary = new Summary(ManUnitedAnalysis, newHtmlReport);

newHtmlSummary.buildAndPrintRepor(newCSVMatches.matches);
console.log(newConsoleSummary.buildAndPrintRepor(newCSVMatches.matches));
