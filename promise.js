const getValueByPromise = (value, delay) => {
    return getPromise = new Promise(resolve => {
            setTimeout(() => { resolve(value) }, delay)
        })
        /*     getPromise.then(() => {
                console.log('value received:', value)
            }) */
}

console.log(getValueByPromise(5, 2000))