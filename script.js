/**
 * this function:
 *  - disable scrolling down with the 'space' or 'down' key in the website when the pop up panel is opened
 *  - enable to switch pages using arrow keys or 'space'
 *  - enable to close country pop ups with 'Esc' key
 * */ 

document.onkeydown = (event) => {
    if ((event.which == 32 || event.which == 40)) {
        event.preventDefault();
        if (document.querySelector(".closeBtn") === null) {
            document.getElementById("go-down").click();
        }
    } else if (event.which == 38) {
        event.preventDefault();
        document.getElementById("go-back").click();
    } else if (event.which == 27 && document.querySelector(".closeBtn")) {
        closeDescription();
    }
}


/*
 * Languages:
 * 0: hungarian
 * 1: english
 * 2: german
 */

const languages = [
    {
        id: 0,
        lang: "hungarian",
        title: "UEFA tagországok",
        smallTitle: "tagországok",
        moreInfo: "több info",
        homeKit: "Hazai mez",
        awayKit: "Idegenbeli mez",
        thirdKit: "Harmadik mez",
        goBack: "vissza",
        competitions: "UEFA versenyszámok",
        national: "Válogatottak",
        clubs: "Klubcsapatok",
        more: "Több"
    },
    {
        id: 1,
        lang: "english",
        title: "UEFA Members",
        smallTitle: "Members",
        moreInfo: "more info",
        homeKit: "Home Kit",
        awayKit: "Away Kit",
        thirdKit: "Third Kit",
        goBack: "Go back",
        competitions: "UEFA Competitions",
        national: "For national teams",
        clubs: "For clubs",
        more: "More"
    },
    {
        id: 2,
        lang: "german",
        title: "UEFA-Mitgliedsverbände",
        smallTitle: "Mitgliedsverbände",
        moreInfo: "mehr info",
        homeKit: "Heimtrikot",
        awayKit: "Auswärtstrikot",
        thirdKit: "Drittes Trikot",
        goBack: "Zurück",
        competitions: "Wettbewerbe",
        national: "Für Nationalmannschaften",
        clubs: "Für Vereinsmannschaften",
        more: "Mehr"
    }
]

const Nations = {
    /*
        0: magyar név / hungarian name
        1: angol név / english name
        2: német név / german name
    */     
    "alb": ["Albánia", "Albania", "Albanien"],
    "and": ["Andorra", "Andorra", "Andorra"],
    "arm": ["Örményország", "Armenia", "Armenien"],
    "aut": ["Ausztria", "Austria", "Österreich"],
    "aze": ["Azerbajdzsán", "Azerbaijan", "Aserbaidschan"],
    "bel": ["Belgium", "Belgium", "Belgien"],
    "bih": ["Bosznia-Hercegovina", "Bosnia and Herzegovina", "Bosnien und Herzegowina"],
    "blr": ["Fehéroroszország", "Belarus", "Belarus"],
    "bul": ["Bulgária", "Bulgaria", "Bulgarien"],
    "cro": ["Horvátország", "Croatia", "Kroatien"],
    "cyp": ["Ciprus", "Cyprus", "Zypern"],
    "cze": ["Csehország", "Czech Republic", "Tschechien"],
    "den": ["Dánia", "Denmark", "Dänemark"],
    "eng": ["Anglia", "England", "England"],
    "esp": ["Spanyolország", "Spain", "Spanien"],
    "est": ["Észtország", "Estonia", "Estland"],
    "fin": ["Finnország", "Finland", "Finnland"],
    "fra": ["Franciaország", "France", "Frankreich"],
    "fro": ["Feröer-szigetek", "Faroe Islands", "Färöer"],
    "geo": ["Grúzia", "Georgia", "Georgien"],
    "ger": ["Németország", "Germany", "Deutschland"],
    "gib": ["Gibraltár", "Gibraltar", "Gibraltar"],
    "gre": ["Görögország", "Greece", "Griechenland"],
    "hun": ["Magyarország", "Hungary", "Ungarn"],
    "irl": ["Írország", "Republic of Ireland", "Irland"],
    "isl": ["Izland", "Iceland", "Island"],
    "isr": ["Izrael", "Israel", "Israel"],
    "ita": ["Olaszország", "Italy", "Italien"],
    "kaz": ["Kazahsztán", "Kazakhstan", "Kasachstan"],
    "kvx": ["Koszovó", "Kosovo", "Kosovo"],
    "lie": ["Liechtenstein", "Liechtenstein", "Liechtenstein"],
    "ltu": ["Litvánia", "Lithuania", "Litauen"],
    "lux": ["Luxemburg", "Luxembourg", "Luxemburg"],
    "lva": ["Lettország", "Latvia", "Lettland"],
    "mda": ["Moldova", "Moldova", "Moldau"],
    "mkd": ["Észak-Macedónia", "North Macedonia", "Nordmazedonien"],
    "mlt": ["Málta", "Malta", "Malta"],
    "mne": ["Montenegró", "Montenegro", "Montenegro"],
    "ned": ["Hollandia", "The Netherlands", "Niederlande"],
    "nir": ["Észak-Írország", "Northern Ireland", "Nordirland"],
    "nor": ["Norvégia", "Norway", "Norwegen"],
    "pol": ["Lengyelország", "Poland", "Polen"],
    "por": ["Portugália", "Portugal", "Portugal"],
    "rou": ["Románia", "Romania", "Rumänien"],
    "rus": ["Oroszország", "Russia", "Russland"],
    "sco": ["Skócia", "Scotland", "Schottland"],
    "smr": ["San Marino", "San Marino", "San Marino"],
    "srb": ["Szerbia", "Serbia", "Serbien"],
    "sui": ["Svájc", "Switzerland", "Schweiz"],
    "svk": ["Szlovákia", "Slovakia", "Slowakei"],
    "svn": ["Szlovénia", "Slovenia", "Slowenien"],
    "swe": ["Svédország", "Sweden", "Schweden"],
    "tur": ["Törökország", "Türkiye", "Türkei"],
    "ukr": ["Ukrajna", "Ukraine", "Ukraine"],
    "wal": ["Wales", "Wales", "Wales"],
}


let lang = 1;
for (const language of languages) {
    document.querySelector(`.${language.lang}`).onclick = () => {
        lang = language.id;
        renderLanguage();
    }
}

function renderLanguage() {
    document.title = languages[lang].title;
    document.querySelector(".inner-title").innerHTML = `
        <h1>UEFA</h1>
        <h2>${languages[lang].smallTitle}</h2>
        <br>
        <a href="#second-page" id="go-down"><span>${languages[lang].moreInfo}</span></a>
        `;
        document.getElementById("go-back").innerHTML = languages[lang].goBack;
        document.querySelector(".competition-title").innerHTML = languages[lang].competitions;
    document.querySelector(".national-title").innerHTML = languages[lang].national;
    document.querySelector(".club-title").innerHTML = languages[lang].clubs;

    const more = document.querySelectorAll(".more");
    for (let i = 0; i < more.length; i++) {
        more[i].innerHTML = languages[lang].more;
    }
    
}

// this function closes country pop up
function closeDescription() {
    document.getElementById('favicon').setAttribute('href', "img/uefa_logo.png");
    document.title = languages[lang].title;
    document.getElementById("modul").remove();
    document.getElementById("overlay").remove();
}



// this function remove the third kit if the team doesn't have it.
function removeElement(element1, element2) {
    element1.remove();
    element2.remove();
}




for (let id in Nations){
    // country hover titles:
    document.getElementById(id).onmousemove = () => {
        document.querySelector(".country-title").innerHTML = `
            <img src="./img/flags/${id}.png" alt="${Nations[id][lang]}">
            <h3>${Nations[id][lang]}</h3>
            `;
        document.querySelector(".country-title").classList.remove("hide");
        let boxWidth = document.querySelector(".country-title").offsetWidth;
        let x = window.event.clientX;
        let y = window.event.clientY;
        
        document.querySelector(".country-title").style.marginTop = `${y - 15}px`;           
        if (screen.width > x + 15 + boxWidth) {
            document.querySelector(".country-title").style.marginLeft = `${x + 12}px`;
        } else {
            document.querySelector(".country-title").style.marginLeft = `${x - 12 - boxWidth}px`;
        }
    }
    document.getElementById(id).onmouseleave = () => {
        document.querySelector(".country-title").classList.add("hide");
    }



    // country pop ups:
    document.getElementById(id).onclick = () => {
        document.getElementById('favicon').setAttribute('href',`./img/flags/${id}.png`);
        document.title = Nations[id][lang];
        document.getElementById("description").innerHTML = `
        <div id="overlay"></div>
        
        <div class="modul" id="modul">
                <header>
                    <div></div>
                    <div id="FlagName">
                        <img src="./img/flags/${id}.png" alt="${Nations[id][lang]} flag">
                        <h2>${Nations[id][lang]}</h2>
                    </div>
                    <button class="closeBtn" onClick="closeDescription()">&times;</button>
                </header>
                <main>
                    <table>
                        <tr>
                            <td><img src="./img/kits/${id}1.png" alt="${Nations[id][lang]} home kit"></td>
                            <td><img src="./img/kits/${id}2.png" alt="${Nations[id][lang]} away kit"></td>
                            <td id="kit3"><img src="./img/kits/${id}3.png" alt="${Nations[id][lang]} third kit" onError="removeElement(kit3, kit3des)"></td>
                        </tr>
                        <tr id="secondRow">
                            <td>${languages[lang].homeKit}</td>
                            <td>${languages[lang].awayKit}</td>
                            <td id="kit3des">${languages[lang].thirdKit}</td>
                        </tr>  
                    </table>
                </main>
            </div>

        
        `;
    }
}
