window.onload = function(){

// ❤️ LOVE COUNTER
const startDate = new Date("2023-12-10");

let now = new Date();
let diff = now - startDate;
let days = Math.floor(diff / (1000*60*60*24));

let counter = document.createElement("h2");
counter.innerText = "Together for " + days + " days ❤️";

document.querySelector(".final-message").prepend(counter);


// ✨ TYPING MESSAGE

const message = `

<p>
Kadhi kadhi life madhye asa ek vyakti yeto
jo saglach badlun takto.
Mazya sathi ti vyakti mhanje tu aahes.
</p>

<p>
Tu mazya aayushyat alis ani kharach saglach badlun gela.
Jevha tu navhtis tevha aayushya fakta chalu hota.
Kadhi kadhi mala vichar yeto
ki tu mazya life madhe kashi alis…
pan mag vatat ki kahi goshti explain karta yet nahi,
tya fakta feel karta yetat.
</p>

<p>
Aplya madhye aata thoda distance aahe,
pan mala mahit ahe he distance pan ek divas kami honar.
To divas yeil jevha aapan ekmekanchya samor basun
hya saglya moments var hasnar.
</p>

<p>
Aani kharach sangaycha tar
50 reasons lihun pan mala asa vatay
ki mi ajun pan explain nahi karu shakat
ki tu mazya sathi kiti special aahes.
</p>

<h2>🌸 Small Poem</h2>

<p>
Tu alis ani jagach badlun gela,<br>
andharat pan ek sundar prakash phulala.<br>
Aata thoda distance aahe aaplya madhye,<br>
pan ek divas he pan kami honar nishchitpane.
</p>

<p>
To divas jevha yeil,<br>
tevha mala fakt ekach vatnar —<br>
ki he sagla wait karna worth hota,<br>
karan mazya samor tu asnar. ❤️
</p>

<h2>❤️ Final Ending</h2>

<p>
Aani kharach sangaycha tar…
hi website fakt ek surprise nahi,
tar tu mazya sathi kiti special aahes
he sangnyacha ek chota prayatna ahe.
</p>
`;


// ✅ FIXED TYPING (HTML break honar nahi)
let i = 0;
let speed = 35; // 👉 readable speed

function typeWriter(){

if(i < message.length){

document.getElementById("loveMessage").innerHTML =
message.substring(0, i);

i++;

setTimeout(typeWriter, speed);

}

}

typeWriter();

};


// 🎉 CONFETTI (same)
function celebrate(){

for(let i=0;i<120;i++){

const conf = document.createElement("div");

conf.className = "confetti";

conf.style.left = Math.random()*100 + "vw";

conf.style.background = `hsl(${Math.random()*360},80%,60%)`;

document.body.appendChild(conf);

setTimeout(()=>conf.remove(),3000);

}

}