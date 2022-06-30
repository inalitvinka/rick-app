export default class DataService {
    static getCharacters(page=1) {
        return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => response.json())
        .then(data => data)   
    }

    static getCharacterById(id=1) {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => data)   
    }

    static getEpisodes() {
        return fetch(`https://rickandmortyapi.com/api/episode`)
        .then(response => response.json())
        .then(data => data)   
    }
}