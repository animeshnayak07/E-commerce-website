let removebutton = document.getElementsByClassName('delbtn')
console.log(removebutton);
for(let i = 0; i < removebutton.length; i++){
    let button = removebutton[i]
    button.addEventListener('click',()=>{
        console.log('clicked');
    });
}