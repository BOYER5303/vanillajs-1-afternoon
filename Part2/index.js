console.log("The house always wins!")

let id = document.getElementById('idInput');
let color = document.getElementById('colorInput')

function setCard(){
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
    console.log(card)
}
