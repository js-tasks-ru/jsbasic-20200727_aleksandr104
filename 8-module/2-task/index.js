import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.staticProducts = products;

    this.updateFilter(this.filters);
  }

  updateFilter(filters) {
    let listProducts = this.products;
    let newListProducts = [];
    let isEmptyFilters = true;

    for (let key in filters) {
      let nameFilter = key;
      let valueFilter = filters[key];
      let filterProducts = [];

      if (Boolean(valueFilter) == true && valueFilter !== 4) {
        filterProducts = this.filterProducts(listProducts, nameFilter, valueFilter);
        isEmptyFilters = false; 
      } 

      newListProducts = newListProducts.concat(filterProducts); 
    }
    
    if (isEmptyFilters) {
      listProducts = this.staticProducts;
      newListProducts = listProducts;
    }

    let divProductGrid = document.querySelector('.products-grid');

    if (divProductGrid == null) {
      divProductGrid = createElement('<div class="products-grid"></div>'); 
    }

    let innerHTML = '';
    for (let i = 0; i < newListProducts.length; i++) {
      let product = newListProducts[i];
      let productCard = new ProductCard(product);
      innerHTML = innerHTML + productCard.elem.outerHTML;
    }
    innerHTML = `<div class="products-grid__inner">
                  ${innerHTML}
                </div>`;
    
    divProductGrid.innerHTML = innerHTML;            

    this.products = newListProducts;
    this.elem = divProductGrid;
  }

  filterProducts(listProducts, nameFilter, valueFilter) {
    let filterProducts;

    if (nameFilter == 'noNuts' && valueFilter == true) {
      nameFilter = 'nuts';
      valueFilter = !valueFilter;     
      filterProducts = listProducts.filter(item => (item[nameFilter] == valueFilter 
        || item[nameFilter] == undefined));    
    } else if (nameFilter == 'vegeterianOnly' && valueFilter == true) {
      nameFilter = 'vegeterian';    
      filterProducts = listProducts.filter(item => item[nameFilter] == valueFilter);
    } else if (nameFilter == 'maxSpiciness') {
      nameFilter = 'spiciness';   
      filterProducts = listProducts.filter(item => item[nameFilter] <= valueFilter);
    } else if (nameFilter == 'category' || valueFilter !== '') {
      filterProducts = listProducts.filter(item => item[nameFilter] == valueFilter);
    };

    return filterProducts;
  }
}
