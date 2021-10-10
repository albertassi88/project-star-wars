import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import Loading from './Loading';
import HeaderPlanets from './HeaderPlanets';
import ElementsPlanets from './ElementsPlanets';
import SearchPlanets from './SearchPlanets';
import '../css/Filtros.css';

function Table() {
    const { 
      tableApi, 
      setName, 
      loading, 
      filters: { order, filterByNumericValues, 
      filterByName: { name } 
    }} = useContext(TodoContext);

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
                    : SearchPlanets()}
               </tbody>
            </table>     
        </div>
    )
}

export default Table;