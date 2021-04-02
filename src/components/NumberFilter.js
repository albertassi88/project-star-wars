import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';

function NumberFilter() {
    const [column, setColumn] = useState('population');
    const [comparison, setComparison] = useState('maior que');
    const [value, setValue] = useState('');
    const [arrayColumn, setArrayColumn] = useState(['', 'population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
    const {
      createFilter, removedFilter,
      filters: { filterByNumericValues },
    } = useContext(TodoContext); 
  
    const arrayComparison = ['maior que', 'menor que', 'igual a'];


    const filterDelete = () => {
      const newArray = arrayColumn.filter((coluna) => coluna !== column);
      setArrayColumn(newArray);      
    };  

    const removedFilterNumeric = () => (
      <div>
        {filterByNumericValues.map((item, index) => (
          <div key={ index } data-testid="filter">
            <pre className="remover">
              {`${item.column} ${item.comparison} ${item.value}`}            
              <button type="button" onClick={ () => removedFilter(index) }>Remover Filtro</button>
            </pre>            
          </div>
        ))}
      </div>
    );

    const renderTable = () => (
        <div className="filters">
          <select
            name="column"
            data-testid="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {arrayColumn.map((items) => (
              <option key={ items } value={ items }>{items}</option>
            ))}
          </select>
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setComparison(target.value) }
          >
            {arrayComparison.map((items) => (
              <option key={ items } value={ items }>{items}</option>
            ))}
          </select>
          <input
            name="value"
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
            data-testid="value-filter"
            type="number"
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => { createFilter(column, comparison, value); filterDelete(); setValue(''); } }
          >
            Adicionar Filtro
          </button>
        </div>
      );    

    return(
        <div>
            {removedFilterNumeric()}
            {renderTable()}
        </div>
    )
}

export default NumberFilter;