// Obsługa zdarzenia pisania na maszynie 
const text = document.querySelector('.description');
const spnCursor = document.querySelector('.cursor');
const txt = 'Hej!!! Jestem Paweł. Początkujący Front End Developer. Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku. Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu i wpisanie w internetowej wyszukiwarce ‘lorem ipsum’ spowoduje znalezienie bardzo wielu stron, które wciąż są w budowie. Wiele wersji tekstu ewoluowało i zmieniało się przez lata, czasem przez przypadek, czasem specjalnie (humorystyczne'  



let indexText = 0;
const addLetter = function ()  {
text.textContent += txt[indexText];
indexText++;
if(indexText === txt.length) clearInterval(indexTyping);
}


const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, 70);
setInterval(cursorAnimation, 400);

//  Obsługa zdarzenia klika na menu hamburger

const burger = document.querySelector(".hamburger");
const bars = document.querySelector(".fa-bars");
const iconx = document.querySelector(".fa-times");
const nav = document.querySelector("nav");

const clickBurger = function() {
    bars.classList.toggle("show");
        iconx.classList.toggle("show");
        nav.classList.toggle("dissapear");

}

burger.addEventListener("click", clickBurger);
