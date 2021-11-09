const multilangSelector = document.querySelectorAll(".multilang-item");



const langAz =()=> {
    // for (let index = 0; index < 5; index++) {
    //     multilangSelector[index].innerHTML = "Ana Sehife";

        
    // }
    multilangSelector[0].innerHTML = "Ana Sehife";
    multilangSelector[1].innerHTML = "Haqqimizda";
    multilangSelector[2].innerHTML = "Xidmetlerimiz";
    multilangSelector[3].innerHTML = "Meqale";
    multilangSelector[4].innerHTML = "Elaqe";
}
const langEn =()=> {
    multilangSelector[0].innerHTML = "Home";
    multilangSelector[1].innerHTML = "About";
    multilangSelector[2].innerHTML = "Services";
    multilangSelector[3].innerHTML = "Blog";
    multilangSelector[4].innerHTML = "Contact";
}

document.querySelector(".mlang-az").addEventListener('click',langAz );
document.querySelector(".mlang-en").addEventListener('click',langEn );