import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';
import FirstFilterPlanets from './FirstFilterPlanets';
import RemovedFilterPlanets from './RemovedFilterPlanets';

function NumberFilter() {
    const [column, setColumn] = useState('population');
    const [arrayColumn, setArrayColumn] = useState(['', 'population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
    const {
      createFilter, removedFilter,
      filters: { filterByNumericValues },
    } = useContext(TodoContext); 
  
    const filterDelete = () => {
      const newArray = arrayColumn.filter((coluna) => coluna !== column);
      setArrayColumn(newArray);      
    };  

    return(
        <div>
            {RemovedFilterPlanets(filterByNumericValues, removedFilter)}
            {FirstFilterPlanets(arrayColumn, createFilter, filterDelete)}
        </div>
    )
}

export default NumberFilter;