import starships from './starships.js'


let button          = document.querySelector('#button')
let name            = document.querySelector('#name')
let model           = document.querySelector('#model')
let manufacturer    = document.querySelector('#manufacturer')
let length          = document.querySelector('#length')
let crew            = document.querySelector('#crew')
let cargo_capacity  = document.querySelector('#cargo_capacity')
let consumables     = document.querySelector('#consumables')




function getInfo() {

    let randomNumber = Math.floor((Math.random() * 37) + 1)
    return starships[randomNumber]
}

function updateInfo(data) {
    name.innerText             = data.name
    model.innerText            = `Model: ${data.model}`
    manufacturer.innerText     = `Manufacturer: ${data.manufacturer}`
    cost_in_credits.innerText  = `Cost-in-credits: ${data.cost_in_credits}`
    length.innerText           = `Length: ${data.length}`
    crew.innerText             = `Crew: ${data.crew}`
    cargo_capacity.innerText   = `Cargo-capacity: ${data.cargo_capacity}`
    consumables.innerText      = `Consumables: ${data.consumables}`

}


button.addEventListener('click', function(){
    let data = getInfo();
    updateInfo(data);
}) 