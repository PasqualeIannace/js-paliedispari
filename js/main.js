document.getElementById("paliBtn").addEventListener("click", function() {
    input = document.getElementById("paliCheck").value;
    console.log(input);

    let inverso;

    for(i = input.length; i >= 0; i--) {
        inverso += input[i];
        console.log(inverso);
    }

    console.log(inverso);
})