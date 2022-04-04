/* Ukol 3
-------------
Urcite jste si vsimli, ze nase vypisovani do okynka je prozatim docela hloupe a umoznuje nam
napsat treba takovy nesmysl jako 4 5 - = 3 + + 1 1 2 apod. Nevadi, To vyresime pozdeji. 
Prozatim programujeme tzv. happy path, tzn. predpokladame, ze uzivatel je sikovny a klika tak, ze
vytvari logicke priklady treba 2 + 2 = :) 

Tak ted tyto jednoduche priklady nechame nas programek i vyresit. Konecne jdeme pocitat! :) 
Prozatim dve jednociferna cisla ;)

Cesta k reseni neni primocara. Neco naprogramujeme, pak zjistime, ze lepsi by bylo jine reseni, tak kod
upravujeme. To je uplne normalni stav. Dulezite je snazit se delat logicke kroky a neskakat od jednoho
k druhemu :) 

1) Potrebujeme neco dalsiho z html nebo uz vsechno mame?
2) Nachystame si funkci pro vypocet, protoze to je gro tohoto tasku :) Funkce bude opravdu jen pocitat
    a vracet vysledek, takze by mela mit nejake parametry, s kterymi bude pracovat.
3) Samotny priklad mame v 'okynku' kalkulacky v podobe textoveho retezce. Budeme tedy potrebovat 
    funkci, ktera nam z toho Stringu vytahne jednotlive polozky, abychom s nimi mohli dal pracovat - treba
    je predat funkci, ktera pocita.
    String ma nektere vlastnosti pole - da se pres nej iterovat, da se vytahnout znak na urcitem indexu, ap.
    A ma spoustu uzitecnych metod (metoda je funkce, ktera nalezi nejakemu objektu), diky kterym se
    s nim da vselijak kouzlit. Doporucuji prozkoumat :) 
    Ja jsem se rozhodla vyuzit metodu split().
4) Pridam si na vhodne misto logiku toho, co se ma stat, kdyz kliknu na '=' 
    (V podstate tim pospojuju to, co jsem si doted nachystala). No a je hotovo :) 
*/

const button = document.querySelector('.switcher button');
const result = document.querySelector('.result');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');

function changeLightColor() {
    const light = document.querySelector('.light');

    light.classList.toggle('green');
}

function renderCalculation(element) {
    
    if (result.textContent === "0") {
        result.textContent = element;
    } else {
        result.textContent += " " + element;
    }
}

function catchElement(event) {
    renderCalculation(event.target.innerText);
}

button.addEventListener('click', changeLightColor);
numbers.addEventListener('click', catchElement);
operators.addEventListener('click', catchElement);

