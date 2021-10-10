import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import Loading from './Loading';
import HeaderPlanets from './HeaderPlanets';
import ElementsPlanets from './ElementsPlanets';
import '../css/Filtros.css';

function Table() {
    const { 
      tableApi, 
      setName, 
      loading, 
      filters: { order, filterByNumericValues, 
      filterByName: { name } 
    }} = useContext(TodoContext);

    const columnOrder = order[0].column;    
    
    let resultFilters = tableApi.filter((item) => item.name.includes(name));
    
    if (order[0].sort === 'desc') {
      resultFilters = tableApi.sort((a,b) => (a[columnOrder] < b[columnOrder]) ? 1 : ((b[columnOrder] < a[columnOrder]) ? -1 : 0));
    } if (order[0].sort === 'asc') {
      resultFilters = tableApi.sort((a,b) => (a[columnOrder] > b[columnOrder]) ? 1 : ((b[columnOrder] > a[columnOrder]) ? -1 : 0));
    } if (name !== "") {
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

    return(
        <div className="container">
          <div className="container-filter">      
            <input onChange={(({target}) => setName(target.value))} type="text" placeholder="Filtrar pelo Name" ></input>
          </div>         
            <table>
               <HeaderPlanets />
               <tbody>
                  {loading 
                    ? <Loading /> 
                    : resultFilters.map((element, index) => {
                      return ElementsPlanets(element, index)
                  })}
               </tbody>
            </table>     
        </div>
    )
}

export default Table;