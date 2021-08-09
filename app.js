const images = [
    { 'id': '1', 'url':'https://pixnio.com/free-images/2018/09/22/2018-09-22-00-00-27.jpg' },
    { 'id': '2', 'url':'https://pixnio.com/free-images/2021/03/11/2021-03-11-12-30-05-1800x1200.jpg' },
    { 'id': '3', 'url':'https://cdn.pixabay.com/photo/2017/10/15/06/03/sneakers-2852607_1280.jpg' },
    { 'id': '4', 'url':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ynL1pR9XtcMXvqtn96chpn33c60uNJi77g&usqp=CAU' },
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