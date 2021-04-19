const API_URL = 'https://icanhazdadjoke.csom/';

const fetchJoke = async () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    const a = new TypeError('erro')
    try {
        const response = await fetch(API_URL, myObject);
        const data = await response.json()
        joke(data.joke)
    }
    catch(erro) {
        joke(erro)
    }

    // .then(response => response.json())
    // .then(data => {
    //   joke(data)
    // });
};
const joke = (text) => {
    const h2 = document.querySelector('h2')
    h2.innerHTML = text
}

window.onload = () => fetchJoke();