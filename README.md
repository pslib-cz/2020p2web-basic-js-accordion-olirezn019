# Basic JavaScript Accordion

Vytvořte skript, který vyhledá v DOM všechny výskyty prvku ``<input type="checkbox">`` uvnitř elementu se **třídou** ``vypujcka-item``.

Na událost ``onclick`` checkboxu navažte funkci, která při každém spuštění přidá/odebere vhodně pojmenovanou třídu HTML elementu se **třídou** ``detail-vypujcky-container``. Jedná se vždy o element, ve stejném kontejneru jako checkbox! Tedy oba elementy mají stejného "rodiče" - ``vypujcka-item``.

Vhodnou úpravou stylů a případně kódu zajistěte, aby se rozbalení/sbalení akordeonu dělo pozvolna - transformací ``height``.

## Live code
Zde bude odkaz na index soubor tohoto webu - zpřístupnění se dělá v *Settings* - *GitHub Pages*.
Dále je třeba upravit URL - za *YOURLOGINNAME* doplnit vaše loginname v GitHubu.
[Odkaz na tuto stránku "živě"](https://pslib-cz.github.io/2020p2web-basic-js-accordion-YOURLOGINNAME/index.html)

## Syntaktické poznámky
Metody pro nalezení kolekce HTML elementů
````
    document.getElementsByClassName("") //v celém dokumentu
     element.getElementsByClassName("") //ve vybraném HTML elementu
     element.getElementsByTagName("")
````
Procházení kolekce HTML elementů (ekvivalent c# foreach)
````
    for (let element of elementCollection)
    {
        
    }
````
Navázání funkce na událost elementu "click"
````
    element.onclick = (e) => { 
        /* do it after click */
    }
````
Metody pro manipulaci se třídami (*CSS class*) elementu
````
    element.classList.contains("")
    element.classList.remove("")
    element.classList.add("")
````
