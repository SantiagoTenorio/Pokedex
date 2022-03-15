const fetchPokemon = () => {
    const pokeName = document.getElementById("Pokename");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}` ;
    fetch(url).then((res) => {
        if(res.status != "200") {
            console.log(res);
            pokeImage("./images/pikachu llorando.png");
        }
        else {
            return res.json();
        }

    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })


}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png");
