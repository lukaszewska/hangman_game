var passwords = ["Kto pod kim dołki kopie sam w nie wpada", 
                 "Co cię nie zabije to cię wzmocni", 
                 "Bez pracy nie ma kołaczy", 
                 "Nosił wilk razy kilka ponieśli i wilka", 
                 "Nic dwa razy się nie zdarza", 
                 "Historia lubi się powtarzać",
                 "Gdyby babcia miała wąsy toby była dziadkiem",
                 "Gdyby kózka nie skakała toby nóżki nie złamała",
                 "Ciągnie swój do swego",
                 "Niedaleko pada jabłko od jabłoni",
                 "Raz na wozie raz pod wozem",
                 "Baba z wozu koniom lżej",
                 "Czego Jaś się nie nauczy tego Jan nie będzie umiał",
                 "Fortuna kołem się toczy",
                 "Milczenie jest złotem",
                 "Kiepskiej baletnicy przeszkadza rąbek u spódnicy",
                 "Lepszy wróbel w garści niż gołąb na dachu",
                 "Tonący brzytwy się chwyta",
                 "Prawdziwych przyjaciół poznaje się w biedzie",
                 "Kłamstwo ma krótkie nogi",
                 "Wszystkie drogi prowadzą do Rzymu",
                 "Nie wszystko złoto co się świeci",
                 "W miłości i na wojnie wszystko jest dozwolone",
                 "Wszystko dobre co się dobrze kończy",
                 "Lepiej zapobiegać niż leczyć",
                 "Jak sobie pościelesz tak się wyśpisz",
                 "Lepiej późno niż wcale",
                 "Cicha woda brzegi rwie",
                 "Nie mów hop póki nie przeskoczysz",
                 "Nie ma co płakać nad rozlanym mlekiem",
                 "Darowanemu koniowi nie zagląda się w zęby",
                 "Wszędzie dobrze ale w domu najlepiej",
                 "Kto pierwszy ten lepszy",
                 "Zakazany owoc smakuje najlepiej",
                 "Lepszy rydz niż nic",
                 "Gdy się człowiek spieszy, to się diabeł cieszy",
                 "Kto mieczem wojuje ten od miecza ginie",
                 "Człowiek uczy się przez całe życie",
                 "Nieszczęścia chodzą parami",
                 "Nie wywołuj wilka z lasu",
                 "Kuj żelazo póki gorące",
                 "Potrzeba jest matką wynalazków",
                 "Nie ma zysku bez ryzyka",
                 "Co kraj to obyczaj",
                 "Jedna jaskółka wiosny nie czyni",
                 "Praktyka czyni mistrza",
                 "Apetyt rośnie w miarę jedzenia",
                 "Nie taki diabeł straszny jak go malują",
                 "Gdzie kucharek sześć tam nie ma co jeść",
                 "Kiedy wejdziesz między wrony musisz krakać tak jak one",
                 "Gdy kota nie ma myszy harcują"
                ];

var random = Math.floor(Math.random()*passwords.length);
var password = passwords[random].toUpperCase();
var passwordArray = password.split("", password.length);
var passwordHide="";
for(i=0; i<password.length; i++) {
    if(password.charAt(i)==" ") passwordHide +=" ";
    else passwordHide +="_"
}
var passwordHideArray = passwordHide.split("", passwordHide.length);

var letters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];
var mistakes = 0;
var good = new Audio("../sounds/good.wav");
var wrong = new Audio("../sounds/wrong.wav");
var win = new Audio("../sounds/win.wav");
var loss = new Audio("../sounds/loss.wav");

window.onload = start;

function start() {
    var divContent = "";
    for(i=0; i<letters.length; i++) {
        divContent = divContent +'<div class="letters" onclick = "check('+i+')" id="letter'+i+'">'+letters[i]+'</div>';
        if((i+1)%7==0) 
            divContent = divContent+'<div style="clear: both;">'
        document.getElementById("alphabet").innerHTML=divContent;
    }
    
    setPassword();
}

function setPassword() {
    document.getElementById("password").innerHTML=passwordHideArray.join('');
    }

function check(nr) {
    var hit = false;
    for(i=0; i<passwordArray.length; i++) {
        if (passwordArray[i]==letters[nr]) {
        passwordHideArray.splice(i, 1, passwordArray[i]);
        hit=true;  
        }
        setPassword();
    }
    if (hit==true) {
        document.getElementById("letter"+nr).style.background="#013250";
        document.getElementById("letter"+nr).style.color="#0487D9";
        document.getElementById("letter"+nr).style.border="2px solid #0487D9";
        document.getElementById("letter"+nr).style.cursor="default";
        document.getElementById("letter"+nr).setAttribute("onclick", ";");
        good.load();
        good.play();
    }
     else {
        document.getElementById("letter"+nr).style.background="#330000";
        document.getElementById("letter"+nr).style.color="#bf2331";
        document.getElementById("letter"+nr).style.border="2px solid #BF2A36";
        document.getElementById("letter"+nr).style.cursor="default";
        document.getElementById("letter"+nr).setAttribute("onclick", ";");
        wrong.load();
        wrong.play();
        mistakes++;
             
         if (((window.innerWidth >= 480)&&(window.innerWidth<=window.innerHeight)) || (window.innerWidth>=900))
            document.getElementById("picture").style.backgroundImage='url(../images/img3/h'+mistakes+'.png)';
         else if ((window.innerWidth>=480)&&(window.innerWidth>window.innerHeight))
            document.getElementById("picture").style.backgroundImage='url(../images/img2/h'+mistakes+'.png)';
         else 
            document.getElementById("picture").style.backgroundImage='url(../images/img1/h'+mistakes+'.png)';
    }
    if (passwordArray.join('')===passwordHideArray.join('')) {
        document.getElementById("alphabet").innerHTML = '<span id="endOfGame"><br />WYGRANA!</span><br /><span onclick = "location.reload()" id="newGame">JESZCZE RAZ?</span><br /><span id="changeLanguage"><a href="indexEN.html">ZMIEŃ NA ANGIELSKI</a></span>';
        setTimeout("win.play()", 500);
    }
    if(mistakes==9) {
        document.getElementById("alphabet").innerHTML = '<span id="endOfGame"><br />PRZEGRANA!<br />Poprawne hasło:<br />'+password+'</span><br /><br /><span onclick = "location.reload()" id="newGame">JESZCZE RAZ?</span><br /><span id="changeLanguage"><a href="indexEN.html">ZMIEŃ NA ANGIELSKI</a></span>';
        setTimeout("loss.play()", 500);
    }
}