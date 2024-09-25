getData();
async function getData(){
    try{
        pokemonName = document.getElementById("input").value.toLowerCase();
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fetch data");
        }
        else{
            let data = await response.json();
            console.log(data);
            let pokemonSprites = data.sprites.front_default;
            let img = document.getElementById("pokemonImg");
            img.src = pokemonSprites;
            img.style.display = "block";
        }
        
    }

    catch(error){
        console.error(error);
    }
}