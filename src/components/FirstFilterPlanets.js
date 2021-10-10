import React, { useState } from 'react';

const arrayComparison = [
    'maior que', 
    'menor que', 
    'igual a'
];

export default function FirstFilterPlanets(arrayColumn, createFilter, filterDelete) {
    const [column, setColumn] = useState('population');
    const [comparison, setComparison] = useState('maior que');
    const [value, setValue] = useState('');  
  
    return (
        <div className="filters">
        <select
            name="column"
            onChange={ ({ target }) => setColumn(target.value) }
        >
            {arrayColumn.map((items) => (
            <option key={ items } value={ items }>
                {items}
            </option>))}
        </select>
        <select
            name="comparison"
            onChange={ ({ target }) => setComparison(target.value) }
        >
            {arrayComparison.map((items) => (
            <option key={ items } value={ items }>
                {items}
            </option>))}
        </select>
        <input
            name="value"
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
            type="number"
        />
        <button
            type="button"
            data-testid="button-filter"
            onClick={ () => { createFilter(column, comparison, value); 
            filterDelete(); 
            setValue('')}}
        >
            Adicionar Filtro
        </button>
        </div>
    );
};    