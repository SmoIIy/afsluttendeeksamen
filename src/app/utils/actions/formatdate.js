export function formatDate(dateString) {
	const date = new Date(dateString);

	const day = String(date.getDate()).padStart(2, "0"); // Sikre minimum 2 cifre
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Hvis måned er 1 ciffer, tilføj 1
	const year = date.getFullYear();
	return `${day}-${month}-${year}`;
}

export function formatDateBack(inputDate) {
	function rewriteDate(dateString) {
		const [day, month, year] = dateString.split("-");
		return `${year}-${month}-${day}`;
	}
	const d = new Date(rewriteDate(inputDate));

	const year = d.getFullYear();
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}
