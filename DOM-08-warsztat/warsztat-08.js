//przycisk wyślij
var wyslijBtn = document.getElementById('wyslij');
//input imie
var inputImie = document.getElementById('name');
//input email
var inputEmail = document.getElementById('email');
//zgoda1
var zgoda1 = document.getElementById('zgoda-marketingowa-1');
//zgoda2
var zgoda2 = document.getElementById('zgoda-marketingowa-2');
//wszystkie-zgody
var wszystkieZgody = document.getElementById('wszystkie-zgody');

//lista z komunikatami błędów
var wiadomosci = document.getElementById( 'wiadomosc');

//pod zdarzenie change dla checkbox wszystkie-zgody podpinam funkcję checkboxState
wszystkieZgody.addEventListener('change',checkboxState);
//'change' - zdarzenie zmiany stanu kontrolki formularza, funkcja checkboxState jest stworzona

//funkcja checkboxState kontrolująca stan dwóch pierwszych checkboxów
function checkboxState(){
    
    //Jeśli dla checboxa Wszystkie-zgody checked = true to dla reszty zgód ustaw checked na true
    //checked to atrybut checkboxów i radio-buttonów - zaznaczony (true) lub nie (false)
    zgoda1.checked = wszystkieZgody.checked;
    zgoda2.checked = wszystkieZgody.checked;
    
    //Jeśli dla checboxa Wszystkie-zgody checked = true to dla reszty zgód ustaw disabledna true
    
    zgoda1.disabled = wszystkieZgody.checked;
    zgoda2.disabled = wszystkieZgody.checked;
}

function validateForm(ev){
    
    //pobieram wszstkie inputy
    var inputs = document.querySelectorAll('input');
    
    //czyszczenie listy z komunikatami błędów
    wiadomosci.innerHTML = "";
    
    //przechodzę pętlą po wybranych inputach
    inputs.forEach(function( el, ind ){
        //waliduję tylko 3 pierwsze pola formularza dlatego 
        // pola z indeksem > 2 mnie nie interesują 
        //i konczę funkcję słówkiem return
        if( ind > 2) {
            return;
        }
        //warunek dla checkboxa
        if( ind == 2 ){
            if( el.checked == false ) {
                var errorLi = document.createElement('li');
                errorLi.innerHTML = "Nie zaznaczono zgody";
                wiadomosci.appendChild(errorLi);
                ev.preventDefault();
                //jeśli wartość atrybutu checkboxa o indeksie 2 jest false
            }
            
        } else {
            if( el.value == "") {
                var errorLi = document.createElement('li');
                errorLi.innerHTML = "Nie wypełniono pola " + el.id;
                wiadomosci.appendChild(errorLi);
                ev.preventDefault();
                //jeśli value pola formularza będzie pusta ""
                
            }
            
        }
        console.log(el,ind);
    })
}

//pod zdarzenie click przycisku podpinam funkcję walidującą formularz validateForm

wyslijBtn.addEventListener('click', validateForm);
