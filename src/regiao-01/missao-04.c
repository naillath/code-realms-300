// Missão 004 — O Guerreiro Experiente
// Dificuldade: 2/10

// A academia de aventureiros deseja identificar personagens experientes.

// Um aventureiro é considerado experiente quando possui pelo menos 20 missões concluídas.

// Objetivo: receba o número de missões concluídas e informe quando o aventureiro atingir esse requisito.

// Requisitos:

// Utilize if.
// Trabalhe com valores inteiros.
// Utilize o operador >=.

#include <stdio.h>

int main() {
    int missoes_concluidas = 25;

    if (missoes_concluidas >= 20) {
        printf("Você é um aventureiro experiente!");
    }

    return 0;
}