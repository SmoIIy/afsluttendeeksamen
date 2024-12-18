export function formatDate(dateString) {
	// Create a Date object from the input
	const date = new Date(dateString);

	// Extract the day, month, and year
	const day = String(date.getDate()).padStart(2, "0"); // Ensures 2 digits
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based, add 1
	const year = date.getFullYear();

	// Return the formatted date
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
