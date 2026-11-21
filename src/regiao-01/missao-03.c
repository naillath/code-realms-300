// Missão 003 — O Baú Misterioso
// Dificuldade: 1/10

// Um aventureiro encontrou um baú contendo determinada quantidade de objetos.

// O baú é considerado cheio quando possui mais de 10 objetos.

// Objetivo: receba a quantidade de objetos e informe quando o baú estiver cheio.

// Requisitos:

// Utilize uma variável inteira.
// Utilize if.
// Trabalhe com o operador >.
// Testes sugeridos: 0, 10, 11 e 20.

#include <stdio.h>

int main() {
    int quantidade_objetos = 11;

    if (quantidade_objetos > 10) {
        printf("Baú cheio! Capacidade máxima atingida.");
    }

    return 0;
}