export default function ElementsPlanets(element, index) {
    return (
        <tr key={ index }>
          <td>{element.name}</td>
          <td>{element.climate}</td>
          <td>{element.created}</td>
          <td>{element.diameter}</td>
          <td>{element.edited}</td>
          <td>{element.gravity}</td>
          <td>{element.orbital_period}</td>
          <td>{element.population}</td>
          <td>{element.rotation_period}</td>
          <td>{element.surface_water}</td>
          <td>{element.terrain}</td>
          <td>{element.url}</td>
          <td>{element.films}</td>
        </tr>  
    )       
}