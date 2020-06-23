 export function changeColor(button, username) {
    button.addEventListener("click", ()=> username.style.color = selectColor());
 };

 export function selectColor() {
     const colors = ["#F54291", "#4CD3C2", "#OE9AA7", "#FFCD3C", "#A8DF65", "#9OOC3F"]; 
     const randomColor  = colors[Math.floor(Math.random()* colors.length)];
     return randomColor;
 }; 
