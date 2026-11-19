// Missão 012 — O Mercado da Vila
// Um comerciante precisa verificar se um cliente consegue adquirir uma mercadoria.

// Objetivo: receba o saldo do cliente e o preço do produto. Informe se a compra pode ser realizada.

// Possuir exatamente o valor do produto é suficiente.

// Requisitos:
// - Utilize if/else.
// - Compare saldo e preço.
// - Considere a igualdade como uma compra válida.

const moedas = 150;
const preco = 100;

if (moedas >= preco) {
    console.log("Compra bem-sucedida! Foi um prazer fechar negócios contigo.");
} else {
    console.log("Compra recusada! Volte quando tiver dinheiro pobretão.");
}