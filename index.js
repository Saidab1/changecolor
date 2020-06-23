import {sayHi} from './sayHi.js';
import {changeColor, selectColor} from './changeColor.js';


const user = prompt("what's your name?");


const sayHiContainer = document.querySelector(".sayhi-container");

const username= document.createElement("p");
username.textContent = sayHi(user);
username.style.fontSize = "30px";
sayHiContainer.appendChild(username);

const button = document.querySelector("button");
button.classList.remove("hide"); 
changeColor(button, username);



 






