/*
//wersja HARDCORE

var output = document.getElementById("output");

//tworzę nowy element
var newElement = document.createElement("p");

//newElement.setAttribute('id', 'newElement');
//
//newElement.className = 'nowaklasa';

//tworze tekst do nowego elementu
var elementContent = document.createTextNode("Zawartość akapitu");

//wstawiam content do akapitu
newElement.appendChild( elementContent );

//wstawiam nowy element do miejsca docelowego
output.appendChild(newElement);

//wersja LIGHT
var nowyElement2 = document.createElement("button");
nowyElement2.innerHTML = "Zawartosc butona";
output.appendChild( nowyElement2);


//wersja SUPER LIGHT
output.innerHTML = "<h4>Nagłówek H4</h4>";

//usuwanie elementów - pierwszy paragraf w div#par-first (Tekst w tym akapicie) oraz div#output
var rodzic = document.getElementById('par-first');
var akapit = rodzic.firstElementChild;
rodzic.removeChild(akapit);
rodzic.removeChild( document.getElementById("output"));

rodzic.parentElement.removeChild(rodzic);

//usuwanie atrybutu
rodzic.removeAttribute("id");
*/


/*//insertBefore
var rodzic2 = document.getElementById("par-second");
var newH6 = document.createElement("h6");
newH6.innerText = "Zawartość haszóstki";
var firstElem = rodzic2.firstElementChild;
rodzic2.insertBefore(newH6, firstElem);*/


var tytul = document.getElementsByTagName('h1')[0];
//pobiera zawartość elementu  wraz ze znacznikami html
console.log( tytul.innerHTML );
//pobiera zawartość elementu  wraz z samym elementem oraz znacznikami html
console.log( tytul.outerHTML );

//pobiera zawatosc - usuwa znacznik html i zostawia tylko tekst
//console.log (tytul.innerText);
//
//tytul.innerHTML = "NOOOOWA ZAAAWARTOŚĆ";


var linki = document.getElementsByTagName('a');
for( var i = 0; i < linki.length; i++) {
    console.log( linki[i].href );
//    console.log( linki[i].className );
    if ( i % 2 == 0 ) {
    //classList.add dodaje klasę
    //classList.remove usuwa klasę
    linki[i].classList.add('decor-link');
    } else {
        linki[i].style.color = 'red';
        linki[i].style.textDecoration = 'none';
        linki[i].style.border = "2px dotted #000";
    }
}
    