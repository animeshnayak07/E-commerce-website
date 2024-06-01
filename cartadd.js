if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}
function ready(){
    let removebutton = document.getElementsByClassName('delbtn')
    for (let i = 0; i < removebutton.length; i++){
        let button = removebutton[i]
        button.addEventListener('click',removecartitem);
    }
   
    let quantityinputs = document.getElementsByClassName('quantity')
    for (let i = 0; i < quantityinputs.length; i++){
        let input = quantityinputs[i]
        input.addEventListener('change',quantitychanged)

    }
    
    
} 

function quantitychanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatecarttotal()
}   
function removecartitem(event){
    let buttonclicked = event.target
    buttonclicked.parentElement.remove()
    updatecarttotal()
}
function updatecarttotal(){
    let cartitem = document.getElementsByClassName('price')
    let total = 0
    for (let i = 0; i < cartitem.length; i++){
        let priceelement = cartitem[i]
        let quantityelement = document.getElementsByClassName('quantity')[i]
        let price = parseFloat(priceelement.innerText.replace('$',''))
        let quantity = quantityelement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('totalprice')[0].innerText = '$'+total
}