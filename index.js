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