const gallery = document.getElementById("gallery");

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const viewerText = document.getElementById("viewerText");

let currentIndex = 0;

const reasons = [

"You make my day better just by being in it ❤️",
"Your smile is my favorite thing in the world",
"I feel lucky every single day because of you",
"You understand me like no one else",
"Your happiness matters to me the most",
"You make even normal moments special",
"I can be my true self around you",
"You bring peace into my life",
"Your voice is my comfort",
"You make me want to become a better person",

"You are the reason behind my smile",
"You make everything feel right",
"You care about me in ways no one else does",
"You are my safe place",
"You make my life more meaningful",
"Your presence itself is enough",
"You always support me",
"You make me feel important",
"You bring positivity into my life",
"You make me feel loved",

"You are always on my mind",
"You make my heart feel full",
"You are my favorite person",
"You make even bad days better",
"You make me feel complete",
"You are my happiness",
"You are my strength",
"You make life beautiful",
"You are my peace",
"You make everything worth it",

"You are my dream come true",
"You make me believe in love",
"You make my life brighter",
"You are my motivation",
"You make me smile without reason",
"You are my forever person",
"You make me feel special",
"You are my comfort zone",
"You make me feel alive",
"You are my heart",

"You make me laugh like no one else",
"You understand my silence",
"You are my favorite thought",
"You make everything better",
"You are my reason to smile",
"You make me feel lucky",
"You are my sunshine",
"You make life easy",
"You are my happiness source",
"You make me feel complete",

"You are my best friend",
"You make my world better",
"You are my love story",
"You make me feel strong",
"You are my everything",
"You make me feel safe",
"You are my forever",
"You make my heart happy",
"You are my joy",
"You make life worth living",

"You are my dream",
"You make me feel loved deeply",
"You are my support system",
"You make me feel calm",
"You are my smile",
"You make me feel special every day",
"You are my reason to wake up happy",
"You make me feel understood",
"You are my life",
"You make everything magical",

"You are my heartbeat",
"You make me feel at home",
"You are my world",
"You make me feel secure",
"You are my happiness reason",
"You make my life meaningful",
"You are my forever happiness",
"You make me feel complete always",
"You are my love",
"You make everything perfect",

"And honestly… I don’t need 100 reasons…",
"Because loving you is the easiest thing I’ve ever done ❤️"

];

// 🔥 LOAD IMAGES (lazy loading added)
for(let i=1;i<=130;i++)
{

let img=document.createElement("img");

img.src=`S (${i}).jpeg`;
img.loading="lazy"; // ✅ important

img.onclick=function(){

currentIndex=i-1;

openViewer();

};

gallery.appendChild(img);

}


// 🔥 OPEN VIEWER (smooth + preload)
function openViewer(){

viewer.style.display="flex";

viewerImg.src=`S (${currentIndex+1}).jpeg`;

viewerText.innerText=quotes[currentIndex];

// 🔥 preload next image (no lag)
let next = new Image();
let nextIndex = (currentIndex + 1) % 30;
next.src = `S (${nextIndex+1}).jpeg`;

}


// CLOSE
function closeViewer(){

viewer.style.display="none";

}


// NEXT
function nextPhoto(){

currentIndex++;

if(currentIndex>29){
currentIndex=0;
}

openViewer();

}


// PREVIOUS
function prevPhoto(){

currentIndex--;

if(currentIndex<0){
currentIndex=29;
}

openViewer();

}


// 🔥 SWIPE SUPPORT (mobile smooth)
let startX = 0;

viewer.addEventListener("touchstart", e=>{
startX = e.touches[0].clientX;
});

viewer.addEventListener("touchend", e=>{
let endX = e.changedTouches[0].clientX;

if(startX - endX > 50){
nextPhoto();
}
else if(endX - startX > 50){
prevPhoto();
}
});