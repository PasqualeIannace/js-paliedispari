document.getElementById("paliBtn").addEventListener("click", function() {
    return palindromo();
})

function palindromo() {
    input = document.getElementById("paliCheck").value;
    console.log(input);

    let inverso = "";

    for(i = input.length - 1; i >= 0; i--) {
        inverso += input[i];
    }

    if(inverso == input) {
        console.log("Questa parola è palindroma!");
    } else {
        console.log(`La parola: ${input} è diversa da: ${inverso}. Non è palindroma!`)
    }
}

// PARI O DISPARI


function pari() {
    player = "pari";
    return play();
}

function dispari() {
    player = "dispari";
    return play();
}

function play() {
    const player = parseInt( document.getElementById("myNumber").value );
    const pc = Math.floor(Math.random() * 5) + 1;

    console.log("Player: ", player, " PC: ", pc);
    return pariOrDispari(player, pc);
}

function pariOrDispari(player, pc) {

    const total = player + pc;
    console.log(total);
    if(total % 2 == 0) {
        return result("pari");
    } else {
        return result("dispari");
    }
}

function result(risultato) {
    console.log("Il risultato è: ", risultato, "player sceglie: ", player);

    if(risultato == player) {
        console.log("Hai vinto!")
    } else {
        console.log("Hai perso!")
    }
}