setInterval(createHeart,300);

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="💗";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-10px";

heart.style.fontSize=Math.random()*20+15+"px";

heart.style.animation="fall 6s linear";

heart.style.zIndex="-1";   // 👈 important line

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),6000);
heart.style.opacity="0.6";

}