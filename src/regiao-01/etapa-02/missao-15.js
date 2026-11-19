// Missão 015 — O Pedido do Comerciante
// Um produto custa 35 unidades monetárias.

// Objetivo: receba o saldo do visitante e informe:
// - Se pode comprar o produto, apresente quanto sobrará.
// - Se não pode, apresente quanto ainda falta.
// Requisitos:
// - Utilize if/else.
// - Realize cálculos aritméticos conforme o resultado da condição.
// - Apresente os resultados de maneira clara.

const valorProduto = 35;
const saldoMoedasVisitante = 50;

if (saldoMoedasVisitante >= valorProduto) {
    const troco = saldoMoedasVisitante - valorProduto;
    console.log(`Compra realizada! Seu troco é de ${troco} moedas.`);
} else {
    const falta = valorProduto - saldoMoedasVisitante;
    console.log(`Saldo insuficiente! Faltam ${falta} moedas para realizar a compra.`);
}