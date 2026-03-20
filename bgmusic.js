document.addEventListener("click", function(){

let music = document.getElementById("bgMusic");

if(music){
music.play().catch(()=>{});
}

}, { once: true });