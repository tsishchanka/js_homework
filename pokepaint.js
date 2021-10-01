const pokeName = 'ditto'
const baseURL = 'https://pokeapi.co/api/v2';
const statsInfo = (statsList) => {
    return statsList.reduce((result, { stat, base_stat }) => {
        const { name } = stat;
        result[name] = base_stat
        return result;
    }, {})
}

const getPokemonByName = async(pokeName) => {
    try {
        const pokUrl = `${baseURL}/pokemon/${pokeName}`;

        const { id, name, stats } = await axios.get(pokUrl).then(result => result.data);
        return {
            id,
            name,
            stats: statsInfo(stats)

        }
    } catch (error) {
        return `pokemon ${pokeName} not found`
    }
}

const pokemonPaint = async(pokeName) => {
    try {
        const pokemon = await getPokemonByName(pokeName);
        console.log(pokemon);
        const pokeStats = pokemon.stats;

        const newDiv = document.createElement('div');
        const newH1 = document.createElement('h1');
        const newH2 = document.createElement('h2');
        const newUl = document.createElement('ul');

        document.body.appendChild(newDiv);
        newDiv.append(newH1);
        newDiv.append(newH2);
        newDiv.append(newUl);

        newH1.innerText = `${pokemon.name} (${pokemon.id})`
        newH2.innerText = 'Stats:'

        const getStatsDetails = (pokeStats) => {

            for (var value in pokeStats) {

                const newLi = document.createElement('li');

                newLi.innerText = `${value} - ${pokeStats[value]}`;

                newUl.appendChild(newLi)
            }
        }
        getStatsDetails(pokeStats);
    } catch (error) {
        return `pokemon ${pokeName} not found`
    }
}
pokemonPaint(pokeName)

//2 

const currentArray = [1, 2, 3];
const myMap = (arr, callback, currentArray) => {
    let i, length = arr.length,
        results = [];
    for (i = 0; i < length; i++) {
        results.push(callback.call(currentArray, arr[i], i, arr));
    }
    return results;
};


const sum = myMap(currentArray, item => {
    return item + 5;
});

console.log(sum);


//3
const filter = (arr, callback, thisArg) => {
    let i, length = arr.length,
        results = [];
    for (i = 0; i < length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }
    return results;
};

//4

const nums = [300, 20, 555, 100, 854, 6, 8, 36, 686];
const data = filter(nums, num => {
    return num >= 100;
});

console.log(data);


currentArray = [
    [1, 2],
    [3, 5]
];

const transformArray = (currentArray) => {
    return currentArray.reduce((result, item) => {

        if (item[1] % 2 === 0) {

            result.push(...item);
        } else {
            result.push(item)
        }

        return result;
    }, [])
}

console.log(transformArray(currentArray));


const transformNumber = (number) => {
    const stringNum = number.toString().split('');

    const newNumber = stringNum.map(num => num ** 2);

    const joined = newNumber.join('')

    return +joined
}
console.log(transformNumber(15144548));




/* const someFunction = (value, delay) => {
    return new Promise(resolve => setTimeout(resolve, delay));
} */