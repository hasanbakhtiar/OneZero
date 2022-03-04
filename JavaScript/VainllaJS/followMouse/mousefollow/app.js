// const place = document.querySelector('p');
// place.style.position = 'absolute';
// place.style.color = "red";
// place.style.fontSize = '50px';
// window.onmousemove = (e)=>{
//         place.style.left = e.clientX + 'px';
//         place.style.top = e.clientY + 'px';
// }


const place = document.querySelector('.box');
place.style.position = 'absolute';
window.onmousemove = (e)=>{
        place.style.left = e.clientX + 'px';
        place.style.top = e.clientY + 'px';
}