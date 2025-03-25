$("#telefone").mask("(99) 9999-99999");


var prods = [
    { id: 1, name: "Bife com batata", price: 30.0 },
    { id: 2, name: "Coxa de frango crocante", price: 25.0 },
    { id: 3, name: "Carne de panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var total      = 0;
    
    output.innerHTML = "";

    for (var input of quantities) {
        var id = input.id;

        output.innerHTML += `Produto: ${prods[id-1].name}  - Preço: ${prods[id-1].price} - Quantidade: ${input.value} </br>`;
        total            += prods[id-1].price * parseFloat(input.value);
    }

    output.innerHTML += `<h2>Total: ${total}</h2>`;

}

