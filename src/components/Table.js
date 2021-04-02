import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import Loading from '../components/Loading';
import '../css/Filtros.css';

function Table() {
    const { tableApi, setName, loading, filters: { order, filterByNumericValues, filterByName: { name } } 
    } = useContext(TodoContext);

    function renderIndex() {
        return (
          <thead>
            <tr>
              <th><h3>Name</h3></th>
              <th><h3>Climate</h3></th>
              <th><h3>Created</h3></th>
              <th><h3>Diameter</h3></th>
              <th><h3>Edited</h3></th>
              <th><h3>Gravity</h3></th>
              <th><h3>Orbital_period</h3></th>
              <th><h3>Population</h3></th>
              <th><h3>Rotation_period</h3></th>
              <th><h3>Surface_water</h3></th>
              <th><h3>Terrain</h3></th>
              <th><h3>Url</h3></th>
              <th><h3>Films</h3></th>
            </tr>
          </thead>);
    }

    function renderRow(item, index) {
        return (
            <tr key={ index }>
              <td>{item.name}</td>
              <td>{item.climate}</td>
              <td>{item.created}</td>
              <td>{item.diameter}</td>
              <td>{item.edited}</td>
              <td>{item.gravity}</td>
              <td>{item.orbital_period}</td>
              <td>{item.population}</td>
              <td>{item.rotation_period}</td>
              <td>{item.surface_water}</td>
              <td>{item.terrain}</td>
              <td>{item.url}</td>
              <td>{item.films}</td>
            </tr>  
        )       
    }

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
               { renderIndex() }
               <tbody>
                 { loading ? <Loading /> : resultFilters.map((element, index) => renderRow(element, index)) }
               </tbody>
            </table>     
        </div>
    )
}

export default Table;