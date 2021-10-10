import React from 'react';
import TodoProvider from './context/TodoProvider';
import TablePlanets from './components/TablePlanets';
import NumberFilter from './components/NumberFilter';
import FormOrderFilterPlanets from './components/FormOrderFilterPlanets';
import './App.css';

function App() { 
  return (
    <div className="App">
      <div className="logo"/>      
      <TodoProvider>
        <NumberFilter/>
        <FormOrderFilterPlanets />
        <TablePlanets />
      </TodoProvider>
    </div>
  );
}

export default App;
