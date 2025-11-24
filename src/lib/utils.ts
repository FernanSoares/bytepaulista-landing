type DateStyle = Intl.DateTimeFormatOptions["dateStyle"];

export function formatDate(date: string, dateStyle: DateStyle = "medium", locales = "pt-BR") {
	// Aceita tanto ISO format (2025-11-24T17:02:40.083Z) quanto formato simples (2024-11-24)
	const dateToFormat = new Date(date);
	
	// Verifica se a data é válida
	if (isNaN(dateToFormat.getTime())) {
		console.error("Data inválida:", date);
		return "Data inválida";
	}
	
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}
