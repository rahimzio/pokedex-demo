let currentpokemon;
//connect API
async function loadpokemon(){
    let searchurl = 'https://pokeapi.co/api/v2/pokemon';
    let response = await fetch(searchurl);
    pokemonname = await response.json();
    pokemonname = pokemonname['results'][0]['name'];
    

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonname}/`;
        if(response.ok) {
            let rightresponse = await fetch(url);
            currentpokemon = await rightresponse.json();
            
            console.log(currentpokemon['stats'][0]['base_stat']);
        }
    pokeinfo();
    }
//get pokemon information and display them
async function pokeinfo(){
    getpokemonname();
    getpokemonimg();
    getpokemontype();
    getmeasurments();
    getstats();
    /*changeprogressbarcolor();*/
    
}

async function getpokemonname(){
    let namefield = document.getElementById('name');
    namefield.innerHTML = currentpokemon['name'];
}

async function getpokemonimg(){
    let img = document.getElementById('img');
    img.src = currentpokemon['sprites']['other']['official-artwork']['front_default']; ;
}

async function getpokemontype(){
    let poketype = currentpokemon['types'][0]['type']['name'];
    let typefield = document.getElementById('type');
    typefield.innerHTML = poketype ;
    typefield.classList.add(poketype);
    console.log(poketype);
    if(currentpokemon['types'][1]['type']['name']){
        let poketype2 = currentpokemon['types'][1]['type']['name'];
        let typefield2 = document.getElementById("type2");
        typefield2.innerHTML = poketype2;
        typefield2.classList.add(poketype2);
    };
    for(let i = 1; i < 7 ; i ++){
        let poketype = currentpokemon['types'][0]['type']['name'];
        let value = 'progressbar' + i;
       let progressbar = document.getElementById(value);
       progressbar.classList.add(poketype);
       let setbar =document.getElementById("progressbar1");
       let greatvalue = setvalue(i) + "%";
       progressbar.style.width = greatvalue ;
      
       console.log(greatvalue);
        console.log(value);
        console.log(poketype);
    };

}

async function getmeasurments(){
    let heigth = currentpokemon['height'];
    let heigthfield = document.getElementById('height');
    heigth = heigth / 10;
    heigthfield.innerHTML = heigth + 'M';
    let weight = currentpokemon['weight'];
    let weightfield = document.getElementById('weight');
    weightfield.innerHTML  = weight + ' KG';
}

async function getstats(){

let hp = currentpokemon['stats'][0]['base_stat'];
let hpfield = document.getElementById('hp').innerHTML = hp;

let attack = currentpokemon['stats'][1]['base_stat'];
let attackfield = document.getElementById('attack').innerHTML = attack;

let defense = currentpokemon['stats'][2]['base_stat'];
let defensefield = document.getElementById('defense').innerHTML = defense;

let spezialattack = currentpokemon['stats'][3]['base_stat'];
let spezialattackfield = document.getElementById('sp.at').innerHTML = spezialattack;

let spzialdefense = currentpokemon['stats'][4]['base_stat'];
let spzialdefensefield = document.getElementById('sp.df').innerHTML = spzialdefense;

let speed = currentpokemon['stats'][5]['base_stat'];
let speedfield = document.getElementById('speed').innerHTML = speed;
}

function setvalue(i){

if(i == 1){
    let hp = currentpokemon['stats'][0]['base_stat'];
    return hp ;
};

if(i == 2){

let attack = currentpokemon['stats'][1]['base_stat'];
return attack ;

};

if(i == 3){
    let defense = currentpokemon['stats'][2]['base_stat'];
    return defense ;
};
if(i == 4){
    let spezialattack = currentpokemon['stats'][3]['base_stat'];
    return spezialattack ;
};
if(i == 5){
    let spzialdefense = currentpokemon['stats'][4]['base_stat'];
    return spzialdefense ;
};
if(i == 6){
    let speed = currentpokemon['stats'][5]['base_stat'];
    return speed ;
};
}
/*
async function changeprogressbarcolor(){
    for(let i = 0; i < 7 ; i ++){
        let progrossbar = document.getElementById(`progressbar${i}`);
        progrossbar.classList.add(poketype);
    };
}*/