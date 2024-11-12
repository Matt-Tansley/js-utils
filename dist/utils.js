"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateForHTMLInput = formatDateForHTMLInput;
// Takes a date and returns it in a format that will display in an HTML date input.
// yyyy-mm-dd  is the format that HTML date input normalises to.
function formatDateForHTMLInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
