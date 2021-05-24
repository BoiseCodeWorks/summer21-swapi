export class Starship{
    constructor(data){
        this.name = data.name
        this.model = data.model
        this.manufacturer = data.manufacturer
        this.costInCredits = data.cost_in_credits
        this.length = data.length
        this.films = data.films
        this.url = data.url
    }


    get listTemplate(){
        return `
        <div onclick="app.starshipsController.getStarship('${this.url}')">
            <h4>${ this.name } - 💳${ this.costInCredits }</h4>
        </div>
        `
    }
    get activeTemplate(){
        return `
        <div class="card shadow p-lg-5 p-3">
            <h4>${ this.name }</h4>
            <h6>💳${ this.costInCredits }</h6>
            <p>${this.manufacturer} - ${this.model}</p>

            <div id="films">films go here</div>
            <button onclick="app.starshipsController.goBack()">Go Back</button>
        </div>
        `
    }

}