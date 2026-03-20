const gallery = document.getElementById("gallery");

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const viewerText = document.getElementById("viewerText");

let currentIndex = 0;

const quotes = [

"Your smile here could brighten anyone’s day ❤️",
"You look truly beautiful in this moment.",
"This picture shows how special you really are.",
"Your happiness in this photo feels so pure.",
"The way you smile here is simply magical.",
"You look amazing without even trying.",
"This picture perfectly shows your beautiful energy.",
"Your eyes here look so full of life.",
"Your smile has a warmth that makes everything better.",
"This moment captures your beautiful personality.",
"You look so graceful in this photo.",
"This picture shows how naturally beautiful you are.",
"Your confidence here is inspiring.",
"Your smile makes this photo perfect.",
"You have a charm that lights up every picture.",
"This photo shows how effortlessly beautiful you are.",
"You look so calm and happy here.",
"Your presence alone makes this moment special.",
"This picture shows your beautiful heart.",
"You have such a lovely aura in this photo.",
"You look stunning in this moment.",
"This smile is something the world should see more often.",
"You carry such a beautiful energy with you.",
"This photo captures your natural beauty perfectly.",
"You look so peaceful and happy here.",
"You have a glow that makes every photo better.",
"This picture reflects how amazing you truly are.",
"You have a smile that feels genuine and warm.",
"This moment shows your beautiful soul.",
"And honestly… every picture of you becomes beautiful simply because you are in it ❤️"

];

for(let i=1;i<=30;i++){

let img=document.createElement("img");

img.src=`S (${i}).jpeg`;

img.onclick=function(){

currentIndex=i-1;

openViewer();

};

gallery.appendChild(img);

}

function openViewer(){

viewer.style.display="flex";

viewerImg.src=`S (${currentIndex+1}).jpeg`;

viewerText.innerText=quotes[currentIndex];

}

function closeViewer(){

viewer.style.display="none";

}

function nextPhoto(){

currentIndex++;

if(currentIndex>29){
currentIndex=0;
}

openViewer();

}

function prevPhoto(){

currentIndex--;

if(currentIndex<0){
currentIndex=29;
}

openViewer();

}