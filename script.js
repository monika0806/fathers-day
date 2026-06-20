window.onload = function(){

document
.getElementById("loginPage")
.classList.add("active");

document
.getElementById("giftPage")
.classList.remove("active");

document
.getElementById("memoryPage")
.classList.remove("active");

document
.getElementById("awardPage")
.classList.remove("active");

document
.getElementById("finalPage")
.classList.remove("active");

}
let pin = "";

function addDigit(num){

if(pin.length<8){

pin += num;

updateDisplay();

}

}

function clearPin(){

pin = pin.slice(0,-1);

updateDisplay();

}

function updateDisplay(){

let dots = "";

for(let i=0;i<4;i++){

if(i < pin.length){

dots += "● ";

}else{

dots += "○ ";
}

}

document
.getElementById("pinDisplay")
.innerHTML = dots;

}

function checkPassword(){

if(pin==="13"){

document

.getElementById("bgMusic")

.play()

document
.getElementById("loginPage")
.classList.remove("active");

document
.getElementById("giftPage")
.classList.add("active");

}else{

document
.getElementById("error")
.innerHTML="Wrong PIN";

}

}

function openGift(){

document
.getElementById("bgMusic")
.play();

document
.getElementById("giftPage")
.classList.remove("active");

document
.getElementById("memoryPage")
.classList.add("active");

loadMemory();

}

const memories=[

{
img:"assets/photos/photo1.jpg",
title:"❤️",
text:"To see you again as a small boy with inocent face "
},

{
img:"assets/photos/photo2.jpg",
title:"College Days 🎓",
text:"The Mechanical Engineer"
},

{
img:"assets/photos/photo3.jpg",
title:"💍",
text:"The New beginning ♥️"
},

{
img:"assets/photos/photo4.jpg",
title:"add-on 1 🌸",
text:"The luckiest girl of her life "
},

{
img:"assets/photos/photo5.jpg",
title:"add-on 2 🌸",
text:"The luckiest boy of his life "
},

{
img:"assets/photos/photo6.jpg",
title:"Love ❤️",
text:"the complete family together"
},

{
img:"assets/photos/photo7.jpg",
title:"Your smile is our strength 💪",
text:"As you always said - Place value depends on Face value 💯"
},

{
img:"assets/photos/photo8.jpg",
title:"Support 🤍",
text:"Let your smile never fade away 🫂"
},

{
img:"assets/photos/photo9.jpg",
title:"🫶",
text:"One as each others support and strength"
},

{
img:"assets/photos/photo10.jpg",
title:"Home ❤️",
text:"Home is where Appaji is."
}

];

let current=0;

function loadMemory(){

document.getElementById("memoryImage").src=
memories[current].img;

document.getElementById("memoryTitle").innerHTML=
memories[current].title;

document.getElementById("memoryText").innerHTML=
memories[current].text;

}

function nextMemory(){

current++;

if(current < memories.length){

loadMemory();

}else{

document
.getElementById("memoryPage")
.classList.remove("active");

document
.getElementById("awardPage")
.classList.add("active");

}

}
function prevMemory(){

if(current>0){

current--;

loadMemory();

}

}
function showFinal(){

document
.getElementById("awardPage")
.classList.remove("active");

document
.getElementById("finalPage")
.classList.add("active");

}
function backToMemory(){

document
.getElementById("awardPage")
.classList.remove("active");

document
.getElementById("memoryPage")
.classList.add("active");

current = memories.length - 1;
loadMemory();

}

function backToAward(){

document
.getElementById("finalPage")
.classList.remove("active");

document
.getElementById("awardPage")
.classList.add("active");

}
function nextMemory(){

current++;

if(current < memories.length){

loadMemory();

}else{

document
.getElementById("memoryPage")
.classList.remove("active");

document
.getElementById("awardPage")
.classList.add("active");

}
}
