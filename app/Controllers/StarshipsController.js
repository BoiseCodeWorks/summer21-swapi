import { ProxyState } from "../AppState.js";
import { swapiService } from "../Services/SwapiService.js";


function drawStarships(){
    let template = ''
    ProxyState.starships.forEach(ship => template += ship.listTemplate)
    document.getElementById('app').innerHTML = template
}

function drawActiveStarship(){
    document.getElementById('app').innerHTML = ProxyState.activeStarship?.activeTemplate
}

function drawActiveStarshipFilms(){
    let template = ''
    ProxyState.films.forEach(film => template += film.template)
    document.getElementById('films').innerHTML = template
}


export class StarshipsController{
    constructor(){
        ProxyState.on('starships', drawStarships)
        ProxyState.on('activeStarship', drawActiveStarship)
        ProxyState.on('films', drawActiveStarshipFilms)
        drawStarships()
    }

    getStarships(){
        try{
            swapiService.getStarships()
        }catch(error){
            alert(error.message)
        }
    }

    getStarship(url){
        try{
            swapiService.getStarship(url)
        }catch(e){
            debugger
            alert(e.message)
        }
    }

    goBack(){
        drawStarships()
    }
}