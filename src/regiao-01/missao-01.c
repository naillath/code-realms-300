// Missão 001 — O Portão da Vila
// Dificuldade 1/10
// Um guarda controla a entrada da vila.

// Para entrar, o visitante precisa possuir nível igual ou superior a 5.

// Objetivo: receba o nível do visitante e informe quando ele estiver autorizado a entrar.

// Requisitos:
// - Utilize uma variável numérica.
// - Utilize uma condicional simples (if).
// - Utilize o operador >=.
// - Não utilize else.

#include <stdio.h>

int main() {
    int nivel = 10;

    if (nivel >= 5) {
        printf("Acesso autorizado! Seja bem-vindo à vila!");
    }

    return 0;
}