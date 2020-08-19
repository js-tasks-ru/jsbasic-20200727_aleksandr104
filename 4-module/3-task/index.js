/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let lengthTable = table.rows.length;

    for (let i = 0; i < lengthTable; i++) {
        let valueAvailable = '';

        if (table.rows[i].cells[3].dataset.available == 'true') {
            valueAvailable = 'available';
        } else if (table.rows[i].cells[3].dataset.available == 'false') {
            valueAvailable = 'unavailable';
        };

        if (valueAvailable != '') {
            table.rows[i].classList.add(valueAvailable);
        }

        if (table.rows[i].hasAttribute('data-available') == false) {
            table.rows[i].setAttribute('hidden', true);
        }

        if (table.rows[i].cells[2].innerHTML == 'f') {
            table.rows[i].classList.add('female');
        } else {
            table.rows[i].classList.add('male');
        }

        if (table.rows[i].cells[1].innerHTML < 18) {
            table.rows[i].style = "text-decoration: line-through";
        }
    }

    return table;
}
