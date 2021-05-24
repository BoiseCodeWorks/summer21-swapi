export class Film { 
    // REVIEW destructuring 
    constructor({title, episode_id, url}){
        this.title = title
        this.episodeId = episode_id
        this.url = url
    }

    get template(){
        return `<div>
            <p><b>${this.title}</b> Episode ${this.episodeId}</p>
        </div>`
    }
}
