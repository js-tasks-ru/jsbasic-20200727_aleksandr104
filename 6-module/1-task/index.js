/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) { 
    this.elem = this.render(rows); 
  }

  render(rows) {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    
    for (let i = 0; i < rows.length; i++) {
      let tr = document.createElement('tr');
      let rowStaff = rows[i];
      
      for (let key in rowStaff) {
        let td = document.createElement('td');
        td.innerHTML = rowStaff[key];
        tr.append(td);
      }
      let td = document.createElement('td');
      let button = document.createElement('button');
      button.innerText = "X";
      button.addEventListener('click', (event) => 
        {this.onclick(event)});
      td.append(button);
      tr.append(td);
      tbody.append(tr);
    }
    table.append(tbody);
    
    return table;
  }

  onclick(event) {
    let tr = event.target.closest('tr');
    tr.remove();
  }
}
