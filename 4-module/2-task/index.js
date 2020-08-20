/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let lengthTable = table.rows.length;

    for (let i = 0; i < lengthTable; i++) {
        table.rows[i].cells[i].style.backgroundColor = 'red';
    };
    
    return table;
}
