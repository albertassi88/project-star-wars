import React, { useState, useEffect } from 'react';
import context from '../context/TodoContext';
import fetchApi from '../services/StarWarsApi';

function TodoProvider({ children}) {
    const [tableApi, setTableApi] = useState([]); 
    const [filters, setFilters] = useState([]);
    const [order, setOrder] = useState([{ column: 'name', sort: 'ASC' }]);
    const [name, setName] = useState('');
    const [loading, setLoading] = useState('Carregando');

    useEffect(() => {
        fetchApi()
        .then(data => {
            setTableApi(data.results);
            setLoading('');
        })
        .catch((error) => {
            alert("Ocorreu um erro ao buscar os items");
        });        
    }, []);

    function removedFilter(index) {
        setFilters(filters.slice(0, index).concat(filters.slice(index + 1)));
    }

    function createFilter(column, comparison, value) {
        setFilters([...filters, { column, comparison, value }]);
    }

    function createOrder(column, sort) {        
        setOrder([{ column, sort }]);
    }

    const getFilters = {
        filterByName: { name },
        filterByNumericValues: filters,
        order: order,
    }

    const contextValue = {
        filters: getFilters,
        tableApi,
        createFilter,
        setName,
        removedFilter,
        createOrder,
        loading,
    }   

    return(
        <context.Provider value={ contextValue }>
        <div>
            { children }
        </div>            
        </context.Provider>      
    )
}

export default TodoProvider;