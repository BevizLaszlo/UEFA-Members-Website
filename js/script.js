import languages from "../json/languages.json" assert {type: 'json'};

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


let lang = 1;
for (const language of languages) {
    document.querySelector(`.${language.lang}`).onclick = () => {
        lang = language.id;
        renderLanguage();
    }
}

function renderLanguage() {
    document.title = languages[lang].title;
    document.querySelector(".language-button span").innerHTML = languages[lang].languages;
    document.querySelector(".inner-title").innerHTML = `
        <h1>${languages[lang].uefa}</h1>
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


for (let id in languages[lang].nations){
    // country hover titles:
    document.getElementById(id).onmousemove = () => {
        document.querySelector(".country-title").innerHTML = `
            <img src="./img/flags/${id}.png" alt="${languages[lang].nations[id]}">
            <h3>${languages[lang].nations[id]}</h3>
            `;
        document.querySelector(".country-title").classList.remove("hide");
        let boxWidth = document.querySelector(".country-title").offsetWidth;
        let x = window.event.clientX;
        let y = window.event.clientY;
        
        document.querySelector(".country-title").style.marginTop = `${y - 15}px`;           
        if (document.documentElement.offsetWidth > x + 5 + boxWidth) {
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
        document.title = languages[lang].nations[id];
        document.getElementById("description").innerHTML = `
        <div id="overlay"></div>
        
        <div class="modul" id="modul">
                <header>
                    <div></div>
                    <div id="FlagName">
                        <img src="./img/flags/${id}.png" alt="${languages[lang].nations[id]} flag">
                        <h2>${languages[lang].nations[id]}</h2>
                    </div>
                    <button class="closeBtn">&times;</button>
                </header>
                <main>
                    <table>
                        <tr>
                            <td><img src="./img/kits/${id}1.png" alt="${languages[lang].nations[id]} home kit"></td>
                            <td><img src="./img/kits/${id}2.png" alt="${languages[lang].nations[id]} away kit"></td>
                            <td id="kit3"><img src="./img/kits/${id}3.png" alt="${languages[lang].nations[id]} third kit" 
                            onerror="document.getElementById('kit3').remove();
                            document.getElementById('kit3des').remove();"></td>
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

        document.querySelector(".closeBtn").onclick = () => {
            closeDescription();
        }       
    }
}

document.querySelector(".languages").onmouseover = () => {
    document.querySelector(".options").classList.remove("hide");
}
document.querySelector(".languages").onmouseleave = () => {
    document.querySelector(".options").classList.add("hide");
}