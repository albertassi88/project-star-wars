import React from 'react';
import TodoProvider from './context/TodoProvider';
import './App.css';
import TablePlanets from './components/TablePlanets';
import NumberFilter from './components/NumberFilter';
import OrderFilter from './components/OrderFilter';

function App() { 

  return (
    <div className="App">
      <div className="logo"/>      
      <TodoProvider>
        <NumberFilter/>
        <OrderFilter />
        <TablePlanets />
      </TodoProvider>
    </div>
  );
}

export default App;
