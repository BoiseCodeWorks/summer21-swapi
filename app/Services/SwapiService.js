import { ProxyState } from "../AppState.js"
import { Film } from "../Models/Film.js"
import { Starship } from "../Models/Starship.js"

class SwapiService{
    async getStarship(url) {
        let res = await fetch(url)
        let data = await res.json()
        ProxyState.activeStarship = new Starship(data)
        ProxyState.films = []
        ProxyState.activeStarship.films.forEach(this.getFilm)
    }
    async getStarships(){
        let res = await fetch('https://swapi.dev/api/starships')
        let data = await res.json() 
        ProxyState.starships = data.results.map(s => new Starship(s))
    }

    async getFilm(filmUrl){
        let res = await fetch(filmUrl)
        let data = await res.json()
        ProxyState.films = [...ProxyState.films, new Film(data)]
    }

}

export const swapiService = new SwapiService()