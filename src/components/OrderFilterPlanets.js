import React, { useContext, } from 'react';
import FormOrderFilterPlanets from './FormOrderFilterPlanets';
import TodoContext from '../context/TodoContext';

function OrderFilter() {
    const { createOrder } = useContext(TodoContext);
   
    return (
        <div>
            {FormOrderFilterPlanets(createOrder)}    
        </div>
    )
}

export default OrderFilter;


