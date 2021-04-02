const url = "https://swapi-trybe.herokuapp.com/api/planets/";

export default function fetchApi() {
    return fetch(url)
    .then((response) => (
        response.ok
          ? response.json()
          : Promise.reject(new Error('Api error'))
    ));
} 