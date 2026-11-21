// Missão 002 — A Espada Enferrujada
// Dificuldade 1/10
// Um ferreiro precisa identificar equipamentos que necessitam de manutenção.

// Uma espada precisa de manutenção quando sua durabilidade é inferior a 30.

// Objetivo: receba a durabilidade de uma espada e informe quando ela precisar de manutenção.

// Requisitos:
// - Trabalhe com valores numéricos.
// - Utilize if.
// - Utilize o operador <.
// - Considere valores entre 0 e 100 como válidos.

#include <stdio.h>

int main() {
    int durabilidade_espada = 29;

    if (durabilidade_espada < 30) {
        printf("Atenção! Esta espada precisa de manutenção!");
    }
    
    return 0;
}