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
  counter.innerText = `Together for ${days} days ${hours} hrs ${minutes} min ${seconds} sec ❤️`;
}

setInterval(updateTimer, 1000);
updateTimer();


// ✨ EMOTIONAL MESSAGE
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
Mi tuzya birthday la hich ek goshta magu shakto —
please kahi change hou deu nakos apan doghi madhe.
Tu mazya aayushyat aahhes — he saglyapeksha motha ahe majhyasathi.
Tuzhi khushi baghun maza divas banato.
Tuzha ek message yeuna mazya chehra var smile yeto.
He kadhi band hou naye asa mala watata rohoj.
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
Tuzhi waat pahu nako — mi always ithe ahen tuzya sathi.
</p>

<p>
Aplya madhye bhandan hotat,
pan apan parat ekmekansathi yeun bolto…
Kiti pan bhandan zala tari,
apan kadhi ekmekanchach vichar karna thambavat nahi.
He bhandan mhanaje apan kitya ektrach shilke, he darshavata.
Te naate kharach strong asata jo tutata nahi.
</p>

<p>
Apan jast vela bhetlo nahi,
pan je kahi moments ahet na —
te mazya sathi khup special ahet…
Holi 2025, palkhi, Rohat…
Pratyek vel asa vatla ki time thambun java ❤️
</p>

<p>
Tuzya sobat jeva bolto,
jeva tuzya awaza aaikto,
jeva tu hashates —
tya weli sagla visarlya sarkha wata.
Dunia ghari geli tari chalel,
pan tu sobat ashil tar kaahi nako.
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
subah sobat chai peena,
sandhyakali eka sobat firana,
aani ek han khup khup happy life ❤️
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
Tuzhi khushi, tuzha aayushya, tuzha smile —
he sagla maza aahe, hech majhe sarvkahi aahe.
</p>

<p>
Sorry mi tula kahi expensive gift deu shakat nahi…
Pan ha chota sa prayatna —
mazya pure heart madhun, mazya pure love madhun ahe ❤️
Karan tu deserve kartes sagla.
</p>

<p class="ending">
Wish You A Many Many Happy Returns Of The Day ❤️<br>
My Love… My Best Friend… My Peace… My Future… 💍<br><br>
Mazya sobat akha aayushya ghalvshil ka? ❤️
</p>

`;


let i = 0;
const speed = 35;

function typeWriter(){
  if(i < message.length){
    document.getElementById("loveMessage").innerHTML = message.substring(0, i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(showProposal, 1200);
  }
}

typeWriter();

};


// 🎉 CONFETTI
function celebrate(){
  for(let i = 0; i < 150; i++){
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.background = `hsl(${Math.random()*360},80%,60%)`;
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 3500);
  }
}

// 💍 SHOW PROPOSAL
function showProposal(){
  document.getElementById("overlay").classList.add("show");
  document.getElementById("proposalBox").classList.add("show");
}

function yesClicked(){
  document.getElementById("overlay").classList.remove("show");
  document.getElementById("proposalBox").classList.remove("show");

  // Rain hearts celebration
  for(let k = 0; k < 30; k++){
    setTimeout(() => {
      const h = document.createElement("div");
      h.innerHTML = "💖";
      h.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:-10px;font-size:${Math.random()*30+20}px;animation:fall 5s linear;z-index:9999;pointer-events:none;`;
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 5000);
    }, k * 80);
  }

  setTimeout(() => window.location = "love.html", 2000);
}