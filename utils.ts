// Takes a date and returns it in a format that will display in an HTML date input.
// yyyy-mm-dd  is the format that HTML date input normalises to.
export function formatDateForHTMLInput(date: Date): string {
    const year: Number = date.getFullYear()
    const month: String = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`
}