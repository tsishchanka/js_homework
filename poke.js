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


const getAllPokemons = async() => {
    try {
        return await fetch(baseURL).then(response => response.json());
    } catch (error) {
        console.log(error)
    }
}

const getPokemonInfo = (namePokemon) => {
    getAllPokemons()
        .then(pokemonsValue => {
            return pokemonsValue.results.reduce((result, { name, url }) => {
                if (name === namePokemon) {
                    result = url;
                }
                console.log(result);
                return result;
            }, '');
        })

    .then((pokUrl) => {
        console.log(pokUrl);
        if (pokUrl === '') {
            return console.log(`Покемон, по имени ${namePokemon} не найден`);;
        }
        try {
            fetch(pokUrl).then(response => response.json()).then(value => { console.log(value) }).catch(error => console.log(error));
        } catch (error) {
            console.log(error) // if pokUrl = '', why this block catch doesn`t catch error, beacause we try to fetch ''
        }
    })
}

getPokemonInfo("charmeleon");

//3
const getArrayPokemonInfo = async() => {
    try {
        getAllPokemons()

        .then((pokemonsValue) => {
                // console.log(pokemonsValue)
                const arrPokemon = []
                pokemonsValue.results.map(({ url }) => {
                    arrPokemon.push(fetch(url).then(item => item.json()));
                })
                console.log(arrPokemon)

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