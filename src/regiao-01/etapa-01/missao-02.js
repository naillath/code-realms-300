// Missão 002 — A Espada Enferrujada
// Dificuldade: 1/10

// Um ferreiro precisa identificar equipamentos que necessitam de manutenção.

// Uma espada precisa de manutenção quando sua durabilidade é inferior a 30.

// Objetivo: receba a durabilidade de uma espada e informe quando ela precisar de manutenção.

// Requisitos:

// Trabalhe com valores numéricos.
// Utilize if.
// Utilize o operador <.
// Considere valores entre 0 e 100 como válidos.
// Testes sugeridos: 10, 29, 30 e 85.

const durabilidadeEspada1 = 19;
const durabilidadeEspada2 = 29;
const durabilidadeEspada3 = 30;
const durabilidadeEspada4 = 85;
const durabilidadeEspada5 = 100;

if (durabilidadeEspada5 >= 0 && durabilidadeEspada5 <= 100) { // Apenas numeros entre 0 e 100 disparam esse if
    if (durabilidadeEspada5 < 30) {
        console.log("⚒️ Esta espada precisa de manutenção antes de voltar ao combate!");
    } 
}

if (durabilidadeEspada1 < 30) {
    console.log("⚒️ Esta espada precisa de manutenção antes de voltar ao combate!");
}

if (durabilidadeEspada2 < 30) {
    console.log("⚒️ Esta espada precisa de manutenção antes de voltar ao combate!");
}

if (durabilidadeEspada3 < 30) {
    console.log("⚒️ Esta espada precisa de manutenção antes de voltar ao combate!");
}

if (durabilidadeEspada4 < 30) {
    console.log("⚒️ Esta espada precisa de manutenção antes de voltar ao combate!");
}