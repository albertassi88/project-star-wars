export default function RemovedFilterPlanets(filterByNumericValues, removedFilter) {
    <div>
      {filterByNumericValues.map((item, index) => (
        <div key={ index } data-testid="filter">
          <pre className="remover">
            {`${item.column} ${item.comparison} ${item.value}`}            
            <button 
                type="button" 
                onClick={ () => removedFilter(index) }>
                Remover Filtro
            </button>
          </pre>            
        </div>
      ))}
    </div>
};  