window.onload = function(){

// ❤️ LIVE LOVE TIMER
const startDate = new Date(2023, 11, 10, 0, 0, 0);

let counter = document.createElement("h2");
counter.id = "loveCounter";
document.querySelector(".final-message").prepend(counter);

function updateTimer(){

let now = new Date();
let diff = now - startDate;

let days = Math.floor(diff / (1000*60*60*24));
let hours = Math.floor((diff / (1000*60*60)) % 24);
let minutes = Math.floor((diff / (1000*60)) % 60);
let seconds = Math.floor((diff / 1000) % 60);

counter.innerText =
`Together for ${days} days ${hours} hrs ${minutes} min ${seconds} sec ❤️`;

}

setInterval(updateTimer,1000);
updateTimer();


// ✨ MESSAGE
const message = `

<p>
Apan gele 3 years pasun sobat ahot — kadhi friend, kadhi best friend,
aani gele 2 years relationship madhe ahot...
Pan khara sangaycha tar mala kadhi vatlach navhta
ki mi kadhi kuthlya mulila asa sangin ki mala tichya var crush hota.
</p>

<p>
Tula sangu… jevha tu 8vi-9vi madhe ashil,
tevha mi tula pahilyanda baghitla hota…
Tevhach tu mazya manat ghar karun basli hotis.
Mala vatla navhta ki apan kadhi relationship madhe yeu,
pan aaj tu mazya sobat ahes — he mazya sathi saglyat motha gift ahe ❤️
</p>

<p>
Ek gosht lakshat thev —
mi kayam tuzya sobat ahe…
Tuzya sukhat, tuzya dukhat,
mi kayam tuzya pathishi ubha asen.
Mi promise karto —
thoda vel lagel, pan tuze sagle swapna purna karin 💖
</p>

<p>
Jevha pasun apan sobat ahot,
tevha pasun maza ayush kharach badlun gela ahe…
Mi progress keli ahe,
karan mala tula kadhi gamvaycha nahi ahe.
</p>

<p>
Aplya madhye bhandan hotat,
pan apan parat ekmekansathi yeun bolto…
Kiti pan bhandan zala tari,
apan kadhi ekmekanchach vichar karna thambavat nahi.
</p>

<p>
Apan jast vela bhetlo nahi,
pan je kahi moments ahet na —
te mazya sathi khup special ahet…
Holi 2025, palkhi, Rohat…
Pratyek vel asa vatla ki time thambun java ❤️
</p>

<p>
Aata pan kadhi kadhi asa vatat —
tu mazya javal asavi,
mi tuza haat dharava,
aani tuzya khandyavar doka thevun gappa marat basava…
He sagla fakt imagine karto,
pan ek divas he sagla kharach honar 💫
</p>

<p>
Mi tuzya sobat future imagine kela ahe —
aapla chota ghar,
aapli choti family,
aani ek happy life ❤️
</p>

<p>
Apla pahila call 3 second cha hota,
aani te 3 second kadhi 3 taas zhale samjlaach nahi…
Aata asa vatat —
screen var nahi,
tar samor basun unlimited bolaycha ❤️
</p>

<p>
I love you sooooooooo muchhhhhhhhh ❤️
Kadhi vatla navhta ki tu mala pasant karshil…
Pan tu mala accept kela —
tya sathi khup khup thank you 💖
</p>

<p>
Sorry mi tula kahi expensive gift deu shakat nahi…
Pan ha chota sa prayatna —
mazya heart madhun ahe ❤️
</p>

<p class="ending">
Wish You A Many Many Happy Returns Of The Day ❤️<br>
My Love… My Best Friend… My Future Wife… 💍<br><br>
Mazya sobat akha aayushya ghalvshil ka? ❤️
</p>

`;


let i=0;
let speed=40;
function typeWriter(){

if(i < message.length){

document.getElementById("loveMessage").innerHTML =
message.substring(0, i);

i++;

setTimeout(typeWriter, speed);

}
else{

// 🎬 animation after typing
setTimeout(showProposal, 1000);

}

}
typeWriter();

};


// 🎉 CONFETTI
function celebrate(){

for(let i=0;i<120;i++){

const conf=document.createElement("div");

conf.className="confetti";

conf.style.left=Math.random()*100+"vw";

conf.style.background=`hsl(${Math.random()*360},80%,60%)`;

document.body.appendChild(conf);

setTimeout(()=>conf.remove(),3000);

}

}

function showProposal(){

function showProposal(){

document.getElementById("overlay").classList.add("show");

document.getElementById("proposalBox").classList.add("show");

}

document.getElementById("proposalBox").classList.add("show");

}

function yesClicked(){
window.location = "love.html";
}