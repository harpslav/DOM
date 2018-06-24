function pobierzImie(event){
    //1. blokujemy domyślne działanie funkcji
    event.preventDefault();
    //2.pobieramy do zmiennej elementy input
    var inputs = document.getElementsByTagName('input');
    console.log(inputs);
    
    
    //3.zapisujemy do zmiennych atrybuty value pobranych inputów
    var fname = inputs[0].value;
    var lname = inputs[1].value;
    
    //4. consol.log ze stworzonych zmiennych
    console.log(fname);
    console.log(lname);
    
    console.log(fname + " " + lname);
}