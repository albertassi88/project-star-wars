import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import HeaderPlanets from './HeaderPlanets';
import SearchPlanets from './SearchPlanets';
import Loading from './Loading';
import '../css/TablePlanets.css';

function TablePlanets() {
  const {setName, loading } = useContext(TodoContext);
  return(
    <div className="container">
      <div className="container-filter">      
        <input 
          onChange={(({target}) => setName(target.value))} 
          type="text" 
          placeholder="Filtrar pelo Nome" 
        />
      </div>         
        <table>
            <HeaderPlanets />
            <tbody>
              {loading ? <Loading /> : SearchPlanets()}
            </tbody>
        </table>     
    </div>
  );
}

export default TablePlanets;