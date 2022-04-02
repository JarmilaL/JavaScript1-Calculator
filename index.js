/* Ukol 1
-------------
Mame sice na kalkulacce vypinac, ale ten zatim vubec nic nedela - stejne jako vsechno ostatni :)
Prvni krok bude naucit svetylko, aby reagovalo na stisknuti tlacitka
a menilo barvu z cervene na zelenou a zpet.

1) S kterymi html elementy budeme pracovat? -> bude se nam hodit ulozit je do promennych?
2) Budeme potrebovat nejakou upravu v html? -> pokud ano, tak hura do toho! (pokud zatim nevime, jdeme dal)
3) Budeme potrebovat nejakou upravu v CSS? -> -//- :)
4) Pripravime si funkci, ktera bude obsluhovat zmenu barvy svetylka - treba changeLightColor()
    -> s cim tato funkce potrebuje pracovat? Nemame to uz nahodou v nejake promenne?
        -> ano? A potrebujeme to jen uvnitr teto funkce nebo i mimo? Pokud jen uvnitr, presuneme.
            (Pokud nevime, presuneme taky. Venku nechavame jen nezbytne nutne promenne.)
        -> ne? Uvnitr funkce definujeme promennou a ulozime objekt, ktery potrebujeme.
    -> vymyslime logiku, jak menit barvu svetylka
5) Svetylko ma reagovat na udalost stisk tlacitka, to bude dalsi krok. (Prosim, pouzijte addEventListener.
     Je mnohem cistsi a prehlednejsi mit vsechnu logiku v JavaScriptu a neprenaset ji do html.
     A volani funkce je rozhodne soucasti logiky ;))
     -> Pokud se pri klikani barva svetylka nemeni, zkuste do funkce pridat (idealne na zacatek)
      console.log('blik'); - pokud se vypisuje, funkce se vola, ale v logice zmeny barvy je nejaka chyba.
      Pokud se ani nevypisuje, je nejaka chyba uz v jejim volani, v eventListeneru nebo je treba
      spatne vybrany html element...
*/

let button = document.querySelector('.switcher button');
let light = document.querySelector('.light');
// Kontrola, jestli se mi do promenne ukladaji prvky, ktere tam chci mit.
// console.log(button); 
// console.log(light);


