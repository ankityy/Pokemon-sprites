// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const container = document.querySelector(".container");

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    const newImg = document.createElement('img');
    const label = document.createElement('span');

    newImg.src = `${baseURL}${i}.png`;
    label.innerText = `#${i}`;

    container.appendChild(pokemon);
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);

}

