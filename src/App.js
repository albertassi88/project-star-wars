import React from 'react';
import TodoProvider from './context/TodoProvider';
import './App.css';
import Table from './components/Table';
import NumberFilter from './components/NumberFilter';
import OrderFilter from './components/OrderFilter';

function App() { 

  return (
    <div className="App">
      <div className="logo"/>      
      <TodoProvider>
        <NumberFilter/>
        <OrderFilter />
        <Table />
      </TodoProvider>
    </div>
  );
}

export default App;
