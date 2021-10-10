import React from 'react';
import TodoProvider from './context/TodoProvider';
import TablePlanets from './components/TablePlanets';
import NumberFilter from './components/NumberFilter';
import OrderFilterPlanets from './components/OrderFilterPlanets';
import './App.css';

function App() { 
  return (
    <div className="App">
      <div className="logo"/>      
      <TodoProvider>
        <NumberFilter/>
        <OrderFilterPlanets />
        <TablePlanets />
      </TodoProvider>
    </div>
  );
}

export default App;
