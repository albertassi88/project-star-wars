import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import ElementsPlanets from './ElementsPlanets';

export default function SearchPlanets() {
    const { 
        tableApi, 
        filters: { order, filterByNumericValues, 
        filterByName: { name } 
    }} = useContext(TodoContext);
  
    const columnOrder = order[0].column;    

    let resultFilters = tableApi.filter((item) => item.name.includes(name));
    
    if (order[0].sort === 'desc') {
      resultFilters = tableApi.sort((a,b) => (a[columnOrder] < b[columnOrder]) ? 1 : ((b[columnOrder] < a[columnOrder]) ? -1 : 0));
    } else if (order[0].sort === 'asc') {
      resultFilters = tableApi.sort((a,b) => (a[columnOrder] > b[columnOrder]) ? 1 : ((b[columnOrder] > a[columnOrder]) ? -1 : 0));
    } else if (name !== "") {
      resultFilters = tableApi.filter((item) => item.name.includes(name));
    }  

    resultFilters = filterByNumericValues.reduce((acc, filter) => {
      switch (filter.comparison) {
      case 'maior que':
        return acc.filter((item) => Number(item[filter.column]) > Number(filter.value));  
      case 'menor que':
        return acc.filter((item) => Number(item[filter.column]) < Number(filter.value));  
      case 'igual a':
        return acc.filter((item) => Number(item[filter.column]) === Number(filter.value));  
      default:
        return acc;
      }
    }, resultFilters);
    return (resultFilters.map((element, index) => (
        ElementsPlanets(element, index)
    )));
} 