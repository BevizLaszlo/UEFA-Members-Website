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
 */

const languages = [
    {
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
    }
]

const Nations = {
    /*
        0: magyar név / hungarian name
        1: angol név / english name
    */     
    "alb": ["Albánia", "Albania"],
    "and": ["Andorra", "Andorra"],
    "arm": ["Örményország", "Armenia"],
    "aut": ["Ausztria", "Austria"],
    "aze": ["Azerbajdzsán", "Azerbaijan"],
    "bel": ["Belgium", "Belgium"],
    "bih": ["Bosznia-Hercegovina", "Bosnia and Herzegovina"],
    "blr": ["Fehéroroszország", "Belarus"],
    "bul": ["Bulgária", "Bulgaria"],
    "cro": ["Horvátország", "Croatia"],
    "cyp": ["Ciprus", "Cyprus"],
    "cze": ["Csehország", "Czech Republic"],
    "den": ["Dánia", "Denmark"],
    "eng": ["Anglia", "England"],
    "esp": ["Spanyolország", "Spain"],
    "est": ["Észtország", "Estonia"],
    "fin": ["Finnország", "Finland"],
    "fra": ["Franciaország", "France"],
    "fro": ["Feröer-szigetek", "Faroe Islands"],
    "geo": ["Grúzia", "Georgia"],
    "ger": ["Németország", "Germany"],
    "gib": ["Gibraltár", "Gibraltar"],
    "gre": ["Görögország", "Greece"],
    "hun": ["Magyarország", "Hungary"],
    "irl": ["Írország", "Republic of Ireland"],
    "isl": ["Izland", "Iceland"],
    "isr": ["Izrael", "Israel"],
    "ita": ["Olaszország", "Italy"],
    "kaz": ["Kazahsztán", "Kazakhstan"],
    "kvx": ["Koszovó", "Kosovo"],
    "lie": ["Liechtenstein", "Liechtenstein"],
    "ltu": ["Litvánia", "Lithuania"],
    "lux": ["Luxemburg", "Luxembourg"],
    "lva": ["Lettország", "Latvia"],
    "mda": ["Moldova", "Moldova"],
    "mkd": ["Észak-Macedónia", "North Macedonia"],
    "mlt": ["Málta", "Malta"],
    "mne": ["Montenegró", "Montenegro"],
    "ned": ["Hollandia", "The Netherlands"],
    "nir": ["Észak-Írország", "Northern Ireland"],
    "nor": ["Norvégia", "Norway"],
    "pol": ["Lengyelország", "Poland"],
    "por": ["Portugália", "Portugal"],
    "rou": ["Románia", "Romania"],
    "rus": ["Oroszország", "Russia"],
    "sco": ["Skócia", "Scotland"],
    "smr": ["San Marino", "San Marino"],
    "srb": ["Szerbia", "Serbia"],
    "sui": ["Svájc", "Switzerland"],
    "svk": ["Szlovákia", "Slovakia"],
    "svn": ["Szlovénia", "Slovenia"],
    "swe": ["Svédország", "Sweden"],
    "tur": ["Törökország", "Türkiye"],
    "ukr": ["Ukrajna", "Ukraine"],
    "wal": ["Wales", "Wales"],
}


let lang = 1;
document.querySelector(".hungarian").onclick = () => {
    lang = 0;
    renderLanguage();
}
document.querySelector(".english").onclick = () => {
    lang = 1;
    renderLanguage();
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
