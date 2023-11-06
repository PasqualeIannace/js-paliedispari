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