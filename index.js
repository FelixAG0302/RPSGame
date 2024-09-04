const emotes = ["📄", "✂️","🌑"];
const buttons = document.getElementsByClassName("Main__playButton")
// Obtain the player's div card
const player = document.querySelector(".Main__section__PlayerChoise") 
// Obtain the machine's div card
const machine = document.querySelector(".Main__section__MachineChoise")

//
for ( let i = 0 ; i < buttons.length; i++) {
    buttons[i].innerHTML = emotes[i]
    buttons[i].addEventListener("click",() => {
        player.innerHTML = buttons[i].innerHTML
        machine.innerHTML = buttons[Math.floor(Math.random()* 3)].innerHTML
        result(player.innerHTML,machine.innerHTML, emotes)
    }
)
}

function result(valorActual, valorRandom, emotes){
    const winner = document.querySelector(".Main__winner")
    if ( valorActual === valorRandom) {
        return winner.innerHTML = "<p> We got a draw </p>"
    }
    else if (valorActual === emotes[0] && valorRandom === emotes[1] || valorActual === emotes[1] && valorRandom === emotes[2] || valorActual === emotes[2] && valorRandom === emotes[0]) {
        winner.innerHTML = "<p> You Lost!!!  </p>"
        
    }
    else{
        winner.innerHTML = "<p> You Win!!! </p>"
    }
    
    
}
