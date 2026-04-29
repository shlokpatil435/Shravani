const gallery = document.getElementById("gallery");

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const viewerText = document.getElementById("viewerText");

let currentIndex = 0;

// 💝 REASONS (same as tuzhe)
const reasons = [
"You make my day better just by being in it ❤️",
"You are my happiness 💖",
"You make everything beautiful",
"You are my safe place ❤️",
"You are my forever 💍",
"And honestly… loving you is the easiest thing ❤️"
];

// 📸 TOTAL IMAGES (CHANGE HERE ONLY)
const TOTAL = 130;

// 🔥 LOAD IMAGES
for(let i=1;i<=TOTAL;i++){

let img=document.createElement("img");

img.src=`S (${i}).jpeg`;
img.loading="lazy";

img.onclick=function(){
currentIndex=i-1;
openViewer();
};

gallery.appendChild(img);
}

// 🔍 OPEN VIEWER
function openViewer(){

viewer.style.display="flex";

viewerImg.src=`S (${currentIndex+1}).jpeg`;

// ✅ FIXED
viewerText.innerText = reasons[currentIndex % reasons.length];

}

// CLOSE
function closeViewer(){
viewer.style.display="none";
}

// NEXT
function nextPhoto(){
currentIndex = (currentIndex + 1) % TOTAL;
openViewer();
}

// PREV
function prevPhoto(){
currentIndex = (currentIndex - 1 + TOTAL) % TOTAL;
openViewer();
}

// 👉 SWIPE
let startX = 0;

viewer.addEventListener("touchstart", e=>{
startX = e.touches[0].clientX;
});

viewer.addEventListener("touchend", e=>{
let endX = e.changedTouches[0].clientX;

if(startX - endX > 50) nextPhoto();
else if(endX - startX > 50) prevPhoto();
});