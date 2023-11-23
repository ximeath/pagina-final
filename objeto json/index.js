import { data } from './data/data.js';

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = {};

document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})

const loadData = data => {
    data.forEach(personaje => {
        const { id, name, image } = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    //appendChild agrega un nodo al final de la lista
    items.appendChild(fragment);
}

items.addEventListener('click', e => {
    addlike(e);
})

const addlike = e => {
    //que contenga btn dark y devuelve true
    if (e.target.classList.contains('btn-dark')){
        //captura todos los elementos de la target
        setLike(e.target.parentElement);
    }
}

const setLike = objeto =>{
    console.log(objeto)
}