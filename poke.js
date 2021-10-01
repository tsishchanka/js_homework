//1
const baseURL = 'https://pokeapi.co/api/v2/pokemon';
fetch(baseURL).then(response => response.json()).then(data => console.log(data)).catch(Error => { console.log(Error) })


const getPokemons = async() => {
    try {
        const result = await fetch(baseURL).then(response => response.json());
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

//2





//2

const getOnePokemonInfo = (namePokemon) => {
    try {
        return fetch(`${baseURL}/${namePokemon}`)
            .then(response => response.ok ? response.json() : console.log(`Покемон по имени ${namePokemon} не найден`))
            .then(pokemonInfo => { console.log(pokemonInfo); });
    } catch (error) {
        console.log(error)
    }
}
getOnePokemonInfo("charmeleon");

//3
const getAllPokemons = async() => {
    try {
        return await fetch(baseURL).then(response => response.json());
    } catch (error) {
        console.log(error)
    }
}
const getArrayPokemonInfo = async() => {
    try {
        getAllPokemons()

        .then((pokemonsValue) => {
                // console.log(pokemonsValue)
                const arrPokemon = []
                pokemonsValue.results.map(({ url }) => {
                        arrPokemon.push(fetch(url).then(item => item.json()));
                    })
                    //console.log(arrPokemon)

                return arrPokemon
            })
            .then((arrPokemon) => {
                const responses = Promise.all(arrPokemon).then(value => { console.log(value) });
            })
    } catch (error) {
        console.log(error)
    }
}


getArrayPokemonInfo()