import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const newCSVMatches = MatchReader.withCsvFile('./football.csv');

const newConsoleSummary = Summary.withConsoleReport('Man United');
const newHtmlSummary = Summary.withHtmlReport('Everton');

newHtmlSummary.buildAndPrintRepor(newCSVMatches.matches);
console.log(newConsoleSummary.buildAndPrintRepor(newCSVMatches.matches));
