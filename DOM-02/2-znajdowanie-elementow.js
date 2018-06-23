//getElementById -nazwa id elementu bez #
var elementPoId = document.getElementById("par-first");
//console.log(elementPoId);

//getElementsByClassName - nazwa klasy elementu bez kropki
//do konkretnych elementów pobranej kolekcji dostajemy się za pomocą indeksów i nawiasów[] jak w tablicach np. elementyPoKlasie[1];
var elementyPoKlasie = document.getElementsByClassName ("link");
//console.log(elementyPoKlasie);
//console.log(elementyPoKlasie[2]);

for(var i= 0; i < elementyPoKlasie.length; i++) {
    console.log ( elementyPoKlasie[ i]);
}

// document.getElementsByTagName - pobieranie kolekcji elementów wg znacznika - np. pobierz linki - HTMLCollection
//dostajemy się za pomocą indeksów jak w tablicy, np. elementyPoTagu[0]
var elementyPoTagu = document.getElementsByTagName("a");
console.log(elementyPoTagu);

//querySelector - pobiera pierwszy znaleziony element o danym selektorze
//WAŻNE!!!! Jeśli wybierzemy elementy po klasie albo id, nalezy w wywołaniu metody użyć . do klasy albo # do id

var qsElementPoId = document.querySelector("#par-second");
console.log(qsElementPoId);

//querySelectorAll - jak wyżej, tylko pobiera wszystkie elementy po wskazanym selektorze. Wyświetla się NodeList
//tutaj można przejść po elementach metodą ForEach


var qsElementyPoKlasie = document.querySelectorAll(".superlink");
//tutaj pobierze tylko pierwszy link o klasie superlink
//var qsElementyPoKlasie = document.querySelector(".superlink");
console.log(qsElementyPoKlasie);
