/* Ukol 2
-------------
Naucime kalkulacku vypisovat, na co klikame. Na beznych kalkulackach se nam taky vzdycky vypisuje,
jake tlacitko jsme zmackli a vidime, jestli jsme v prikladu, ktery chceme pocitat, neudelali nejaky
preklep. Presne to si ted nachystame.

(hint: event.target)

Pokud to chcete zkusit bez dalsich napoved, nectete dal ;)

1) Jake html elementy budeme potrebovat? Ulozime si je? (hint: Tri hlavni.)
2) Nachystame funkci, ktera bude do 'okynka' (v html ma tridu 'result') vypisovat misto 0 nejaky prvek. 
    (Prozatim nemusime resit co. Tato funkce jen vypise na kalkulacce to, co ji posleme.)
    - Pozor, pocatecni hodnota na kalkulacce je 0, budeme ji muset prepsat ;) 
3) Nachystame funkci, ktera bude zjistovat, na co jsme na kalkulacce klikli. A prozatim to treba vypisovat
    do konzole. (Pozdeji vracet)
    - Funkce bude pracovat s eventem, ktery dostane od event listeneru. 
    - Jelikoz nebudeme chtit pridavat event listener na kazde jedno tlacitko na kalkulace (to by bylo opravdu otravne),
        pridame ho na rodicovsky prvek, ktery zahrnuje nejakou logickou skupinu. V nasem pripade to budou
        samozrejme numbers a operators :) 
    - Pokud to tak udelame a pak zkusime do konzole vypsat (uvnitr te funkce) event, nezjistime z nej,
        na co konkretne jsme klikli. Budeme jen vedet, ze to byl ten rodicovsky prvek. Musime se podivat
        hloub, konkretne na target a uvnitr targetu najdeme urcite nejakou specifickou vlastnost, ktera
        nese informaci, kterou potrebujeme vypsat ;) (event je objekt, ktery je slozeny z dalsich objektu,
            target je tedy objekt uvnitr objektu event, ktery ma spoustu vlastnosti)
4) Pridame si event listener na numbers a operators a predame mu funkci, kterou jsme si prichystali
    v predchozim bode. Vyzkousime, jestli se nam do konzole vypisuje presne to, na co klikame (cislo nebo operator).
5) Propojime obe funkce, ktere jsme naprogramovali tak, aby se to, na co klikame, vypisovalo do okynka kalkulacky.
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
    console.log(event.target.innerText);
}

renderCalculation(3);

button.addEventListener('click', changeLightColor);
numbers.addEventListener('click', catchElement);
operators.addEventListener('click', catchElement);

