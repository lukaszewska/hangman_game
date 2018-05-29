var passwords = ["A bad excuse is better than none", 
                 "Actions speak louder than words", 
                 "A friend in need is a friend indeed", 
                 "A lie has no legs", 
                 "All is well that ends well",
                 "An ounce of prevention is worth a pound of cur",
                 "Ask a silly question and you get a silly answer",
                 "Bad news travels fast",
                 "Beauty is only skin deep",
                 "Better late than never",
                 "Early bird catches the worm",
                 "Even if I am a minority of one truth is still the truth",
                 "Faith will move mountains",
                 "Fortune favours the brave",
                 "Fortune is fickle",
                 "Half a loaf is better than none",
                 "He who lives by the sword shall die by the sword",
                 "History repeats itself",
                 "Honesty is the best policy",
                 "It is a wise talker who knows when he has nothing to say",
                 "It is never late to learn",
                 "It never rains but it pours",
                 "It is easy to be wise after the event",
                 "Love all trust a few do wrong to none",
                 "Make hay while the sun shines",
                 "My house is my castle",
                 "Necessity is the mother of invention",
                 "Nothing venture nothing gain",
                 "One swallow does not make a summer",
                 "Practice makes perfect",
                 "Prevention is better than cure",
                 "Rome was not built in a day",
                 "The appetite grows with what it feeds on",
                 "The devil is not so black as he is painted",
                 "There is no accounting for tastes",
                 "Time is a great healer",
                 "Too many cooks spoil the broth",
                 "When the cat is away the mice will play",
                 "A bad workman blames his tools",
                 "A bird in the hand is worth two in the bush",
                 "A drowning man will clutch at a straw",
                 "A room without books is a body without soul",
                 "All that glitters is not gold",
                 "All is fair in love and war",
                 "As you make your bed so you must lie upon it",
                 "Constant dropping wears away a stone",
                 "Every cloud has a silver lining",
                 "Forbidden fruit is sweetest",
                 "It is no use crying over spilt milk",
                 "Let sleeping dogs lie",
                 "When in Rome do as the Romans do",
                 "Where there is a will there is a way"
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

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
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
        document.getElementById("alphabet").innerHTML = '<span id="endOfGame"><br />YOU WIN!</span><br /><span onclick = "location.reload()" id="newGame">PLAY AGAIN</span><br /><span id="changeLanguage"><a href="indexPL.html">CHANGE TO POLISH</a></span>';
        setTimeout("win.play()", 500);
    }
    if(mistakes==9) {
        document.getElementById("alphabet").innerHTML = '<span id="endOfGame"><br />YOU LOST!<br />Correct answer: <br />'+password+'</span><br /><br /><span onclick = "location.reload()" id="newGame">PLAY AGAIN</span><br /><span id="changeLanguage"><a href="indexPL.html">CHANGE TO POLISH</a></span>';
        setTimeout("loss.play()", 500);
    }
}