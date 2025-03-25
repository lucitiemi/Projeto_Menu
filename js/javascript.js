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
    var nome = document.getElementById("nome");
    var telefone = document.getElementById("telefone");
    var email = document.getElementById("email");
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    
    output.innerHTML = `<p>Caro <b>${nome.value}</b></p><br><br>`;

    output.innerHTML += `<p>Seguem os dados do seu pedido.</p><br>`;
    output.innerHTML += `<p>O seu pedido é:</p><br>`;

    for (var input of quantities) {
        var id = input.id;

        if(parseFloat(input.value)){
            output.innerHTML += `<li>Prato: ${prods[id-1].name}  - Preço unitário: ${formatter.format(prods[id-1].price)} - Quantidade: ${input.value} - Total:  ${formatter.format(parseFloat(input.value)*parseFloat(prods[id-1].price))} </li>`;
            total            += prods[id-1].price * parseFloat(input.value);
        }
    }

    output.innerHTML += `<h3>Preço final: ${formatter.format(total)}</h3>`;

}

