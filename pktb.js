const url = "https://pokeapi.co/api/v2/pokemon/"
const card = document.getElementById('card')
const btn = document.getElementById('btn')
const naam = document.querySelector(".ln")
const id = document.querySelector(".po")
const imgg = document.querySelector("img")
const typ1 = document.querySelector(".tp1")
const typ2 = document.querySelector(".tp2")
const ab1 = document.querySelector("#ab1 h1")
const ab2 = document.querySelector("#ab2 h1")
const ab3 = document.querySelector("#ab3 h1")
let nk = document.querySelectorAll(".nk")

const typecol = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#539AE2',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A',
    ground: '#EC068',
    flying: '#A890F',
    psychic:'#F85888', 
    bug:'#A8B820', 
    rock:'#B8A038', 
    ghost:'#705898', 
    dragon:'#7038F8',  
    dark:'#705848',  
    steel:'#B8B8D' ,  
    fairy:'#EE99AC'
  };


let generateCard = (data) =>{
    naam.textContent = `${data.name}`
    id.textContent = `${data.id}`;
    ab1.innerText = `${data.stats[1].base_stat}`;
    ab2.innerText = `${data.stats[2].base_stat}`;
    ab3.innerText = `${data.stats[5].base_stat}`;
    console.log(data);
    imgg.src = `https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/${data.id}.svg`;
    const themecol = typecol[data.types[0].type.name]
    typ1.textContent = `${data.types[0].type.name}`
    if(!data.types[1]){
        typ2.style.display="none"
    }else{
        const themecol2 = typecol[data.types[1].type.name]
        typ2.style.display="block"
        typ2.textContent = `${data.types[1].type.name}`
        typ2.style.background = `${themecol2}`;
    }
    card.style.background = `radial-gradient(
        circle at 50% 0%, ${themecol} 36%,white 36%
    )`;
    typ1.style.background = `${themecol}`;
    nk.forEach(e=>{
        e.style.boxShadow = "4px 4px"+ `${themecol}`;
    })
}
let pokedata = ()=>{
    let randomNumber = Math.floor(Math.random() * 500) + 1;
    let finalurl = url+randomNumber;
    fetch(finalurl).then((Response)=>Response.json())
    .then((data)=>generateCard(data))
}

btn.addEventListener("click",pokedata);