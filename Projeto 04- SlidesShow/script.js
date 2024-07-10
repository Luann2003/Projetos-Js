'use strict';

const images = [
    {'id': '1' , 'url':'./imgs/chrono.jpg'},
    {'id': '2' , 'url':'./imgs/inuyasha.jpg'},
    {'id': '3' , 'url':'./imgs/ippo.png'},
    {'id': '4' , 'url':'./imgs/tenchi.jpg'},
    {'id': '5' , 'url':'./imgs/yuyuhakusho.jpg'},
]

const containerItems = document.querySelector("#container-items");


const loadimages = (images, container) => {
    images.forEach (image => {
        container.innerHTML +=  `
        <div class='item' >
            <img src ='${image.url}'
        </div>
        `
    });
}

loadimages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);


