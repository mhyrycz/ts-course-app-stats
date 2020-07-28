export const dateStringToDate = (dateString: string): Date => {
	const datesPart = dateString.split('/').map((value: string): number => {
		return parseInt(value);
	});

	return new Date(datesPart[2], datesPart[1] - 1, datesPart[0]);
};
