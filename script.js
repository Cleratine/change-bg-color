const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=['red','green','orange','yellow','pink','blue','white','violet'];

body.style.backgroundColor='red';

button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor= colors[colorIndex];
});
