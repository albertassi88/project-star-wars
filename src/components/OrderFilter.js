import React, { useState, useContext, } from 'react';
import TodoContext from '../context/TodoContext';

function OrderFilter() {
    const [radioOrder, radioSetOrder] = useState('');
    const [selectOrder, selectSetOrder] = useState('');
    const { createOrder } = useContext(TodoContext);

    const order = ["name", "climate", "created", "diameter", "edited", "gravity", "orbital_period",
    "population", "rotation_period", "surface_water", "terrain", "url", "films"];

    function renderOrder() {
        return (
            <div className="filters-order">
                <form>            
                    <select onClick={ ({target}) => selectSetOrder(target.value) } >
                        {order.map((element, index) => <option key={index}>{element}</option>)}                  
                    </select>
                    <input onChange={ ({target}) => radioSetOrder(target.value) } 
                        type="radio" id="asc" name="order" value="asc" />
                    <label for="asc">ASC</label>
                    <input onChange={ ({target}) => radioSetOrder(target.value) } 
                        type="radio" id="desc" name="order" value="desc" />
                    <label for="desc">DESC</label>
                    <button onClick={() => createOrder(selectOrder, radioOrder)} type="button">Ordenar Filtro</button>
                </form>             
            </div>          
        )
    }

    return (
        <div>
            {renderOrder()}    
        </div>
    )
}

export default OrderFilter;


