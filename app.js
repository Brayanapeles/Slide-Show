const images = [
    { 'id': '1', 'url':'https://p2.piqsels.com/preview/515/906/355/kittens-cats-pet-cute.jpg' },
    { 'id': '2', 'url':'https://p1.pxfuel.com/preview/908/725/314/cat-cat-family-cute-pet-kitty-little.jpg' },
    { 'id': '3', 'url':'https://i0.hippopx.com/photos/529/582/333/dog-bernese-mountain-dog-animal-big-dog-preview.jpg' },
    { 'id': '4', 'url':'https://cdn.pixabay.com/photo/2020/07/01/19/52/pets-5360761_1280.jpg' },
    { 'id': '5', 'url':'https://p1.pxfuel.com/preview/796/80/896/puppy-brown-sausage-shoe-leather-tasty.jpg' },
    { 'id': '6', 'url':'https://pixnio.com/free-images/2021/03/11/2021-03-11-12-42-46-1800x1200.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const previous = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}


/* Modal */
const link_to_openModal = document.querySelector('#link-myAccount');
const btn_signIn = document.querySelector('#btn--logn-in');
const btn_cancelLogin = document.querySelector('#btn--cancel');

const open_modal = () => document.querySelector(".App--model").classList.add("active");
const closeModal = () => document.querySelector(".App--modal").classList.remove("active");

// const openModal = () => document.querySelector('#modal').classList.add('active')
// const closeModal = () => document.querySelector('.App--modal').classList.remove('active')

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
document.querySelector('#open-modal').addEventListener('click', open_modal);
document.querySelector('#btn--cancel').addEventListener('click', closeModal);