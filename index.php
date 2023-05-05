<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link id="favicon" rel="icon" href="./img/uefa_logo.png">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/e4271c8952.js" crossorigin="anonymous"></script>
    <title>UEFA Members</title>
</head>
<body>
    <div class="container">
        <div class="main-page">

            <div class="languages">

                <div class="language-button">
                    <i class="fa-solid fa-globe"></i>
                    <span>languages</span>
                </div>

                <div class="options hide">
                    <ul>
                        <li class="english"><img src="./img/flags/gbr.png" alt="English"><span>English</span></li>
                        <li class="german"><img src="./img/flags/ger.png" alt="Deutsch"><span>Deutsch</span></li>
                        <li class="hungarian"><img src="./img/flags/hun.png" alt="magyar"><span>magyar</span></li>
                        <li class="slovakian"><img src="./img/flags/svk.png" alt="Slovenčina"><span>Slovenčina</span></li>
                    </ul>
                    <ul>
                        <li class="spanish"><img src="./img/flags/esp.png" alt="Español"><span>Español</span></li>
                        <li class="russian"><img src="./img/flags/rus.png" alt="Русский"><span>Русский</span></li>
                        <li class="turkish"><img src="./img/flags/tur.png" alt="Türkçe"><span>Türkçe</span></li>
                        <li class="italian"><img src="./img/flags/ita.png" alt="Italiano"><span>Italiano</span></li>
                    </ul>
                    
                </div>
            </div>

            <div class="title">
                <img src="img/uefa_logo.png" alt="uefa_logo">
                <div class="inner-title">
                    <h1>UEFA</h1>
                    <h2>Members</h2>
                    <br>
                    <a href="#second-page" id="go-down"><span>More info</span></a>
                </div>
            </div>

            <div class="country-title hide"></div>

            <div class="mapdiv">
                <?php include "svg/europe.svg" ?>
            </div>
            <div id="description"></div>
        </div>


        <div class="second-page" id="second-page">
            <div class="wrapper">
                <a href="#" id="go-back"><span>Go back</span></a>

                <div class="wrapper-content">
                    <h2 class="competition-title">UEFA Competitions</h2>
    
                    <h3 class="national-title">For national teams</h3>
    
                    <div class="national">
                        <div class="competition uec">
                            <div class="content">
                                <div class="trophy">
                                    <img src="./img/trophies/uec.png" alt="EURO trophy">
                                </div>
                                <div class="info">
                                    <img src="./img/logos/uec.png" alt="EURO logo">
                                    <a href="https://www.uefa.com/euro-2024/" target="_blank"><span class="more">More</span></a>
                                </div>
                            </div>
                        </div>
    
                        <div class="competition unl">
                            <div class="content">
                                <div class="trophy">
                                    <img src="./img/trophies/unl.png" alt="Nations League trophy">
                                </div>
                                <div class="info">
                                    <img src="./img/logos/unl.png" alt="Nations League logo">
                                    <a href="https://www.uefa.com/uefanationsleague/" target="_blank"><span class="more">More</span></a>
                                </div>
                            </div>
                        </div>
    
                        <div class="competition ueq">
                            <div class="content">
                                <div class="trophy">
                                    <img src="./img/trophies/ueq.png" alt="European Qualifiers logo">
                                </div>
                                <div class="info">
                                    <img src="./img/logos/ueq.png" alt="European Qualifiers logo">
                                    <a href="https://www.uefa.com/european-qualifiers/" target="_blank"><span class="more">More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <h3 class="club-title">For clubs</h3>
    
                    <div class="club">
    
                        <div class="competition ucl">
                            <div class="content">
                                <div class="trophy">
                                    <img src="./img/trophies/ucl.png" alt="Champions League trophy">
                                </div>
                                <div class="info">
                                    <img src="./img/logos/ucl.png" alt="Champions League logo">
                                    <a href="https://www.uefa.com/uefachampionsleague/" target="_blank"><span class="more">More</span></a>
                                </div>
                            </div>
                        </div>
    
                        <div class="competition uel">
                            <div class="content">
                                <div class="trophy">
                                    <img src="./img/trophies/uel.png" alt="Europe League trophy">
                                </div>
                                <div class="info">
                                    <img src="./img/logos/uel.png" alt="Europe League logo">
                                    <a href="https://www.uefa.com/uefaeuropaleague/" target="_blank"><span class="more">More</span></a>
                                </div>
                            </div>
                        </div>
    
                        <div class="competition uecl">
                            <div class="content">
                                <div class="trophy">
                                    <img src="./img/trophies/uecl.png" alt="Europe Conference League trophy">
                                </div>
                                <div class="info">
                                    <img src="./img/logos/uecl.png" alt="Europe Conference League logo">
                                    <a href="https://www.uefa.com/uefaeuropaconferenceleague/" target="_blank"><span class="more">More</span></a>
                                </div>
                            </div>
                        </div>
    
                        <div class="competition usc">
                            <div class="content">
                                <div class="trophy">
                                    <img src="./img/trophies/usc.png" alt="Super League trophy">
                                </div>
                                <div class="info">
                                    <img src="./img/logos/usc.png" alt="Super League logo">
                                    <a href="https://www.uefa.com/uefasupercup/" target="_blank"><span class="more">More</span></a>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>

            </div>
        </div>
    </div>      

    <script type="module" src="./js/script.js"></script>
</body>
</html>