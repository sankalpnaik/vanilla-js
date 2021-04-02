
const dog_result = document.getElementById('dogResult');
const cat_result = document.getElementById('catResult');
const fox_result = document.getElementById('foxResult');

const getDogButton = document.getElementById('getDogBtn');
const getCatButton = document.getElementById('getCatBtn');
const getFoxButton = document.getElementById('getFoxBtn');

function getRandomDog(){
    fetch('https://random.dog/woof.json')
    .then((response) => response.json())
    .then((data) => {
        dog_result.innerHTML = `<img src="${data.url}"/>`
    })
}

function getRandomCat(){
    fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => {
        cat_result.innerHTML = `<img src="${data.file}"/>`
    })
}

function getRandomFox(){
    fetch('https://randomfox.ca/floof/')
    .then((response) => response.json())
    .then((data) => {
        fox_result.innerHTML = `<img src="${data.image}"/>`
    })
}

getDogButton.addEventListener('click',getRandomDog)
getCatButton.addEventListener('click',getRandomCat)
getFoxButton.addEventListener('click',getRandomFox)