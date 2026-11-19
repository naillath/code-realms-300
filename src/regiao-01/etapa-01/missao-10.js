// Missão 010 — O Primeiro Julgamento
// O conselho da vila precisa verificar se um visitante possui os requisitos mínimos para participar do treinamento.

// Requisitos:
// - Nível igual ou superior a 10.
// - Pelo menos 5 missões concluídas.
// - Possuir um equipamento.
// Objetivo: receba essas três informações e informe quando o visitante cumprir todos os requisitos.

// Requisitos técnicos:
// - Utilize uma condicional simples.
// - Utilize o operador lógico AND (&&).
// - Trabalhe com números e booleanos.
// - Não utilize else.

const nivel = 12;
const missoesConcluidas = 7;
const possuiEquipamento = true;

if (nivel >= 10 && missoesConcluidas >= 5 && possuiEquipamento) {
    console.log("Aprovado! Você cumpriu todos os requisitos e está autorizado a participar do treinamento!");
}