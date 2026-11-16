# CODE REALMS 300
# Região 01 — Vila dos Iniciantes
## Livro de Missões

**Entrega:** 01 de 06  
**Quantidade:** 50 missões  
**Tema:** Fundamentos e estruturas condicionais  
**Linguagens:** C, Python e JavaScript/Node.js

Todas as missões deverão ser implementadas nas três linguagens. Os enunciados e critérios de aprovação são iguais, respeitando as particularidades de cada linguagem.

---

# 1. Etapa I — Aprendizagem e reconhecimento

*Missões 001–010 | Primeiro contato com a lógica e as decisões.*

Nesta etapa, o objetivo é compreender como os programas recebem informações, realizam comparações e executam instruções com base em condições.

### Missão 001 — O Portão da Vila

**Dificuldade:** 1/10

Um guarda controla a entrada da vila.

Para entrar, o visitante precisa possuir nível igual ou superior a 5.

**Objetivo:** receba o nível do visitante e informe quando ele estiver autorizado a entrar.

**Requisitos:**
- Utilize uma variável numérica.
- Utilize uma condicional simples (`if`).
- Utilize o operador `>=`.
- Não utilize `else`.

**Testes sugeridos:** níveis 3, 5 e 10.

### Missão 002 — A Espada Enferrujada

**Dificuldade:** 1/10

Um ferreiro precisa identificar equipamentos que necessitam de manutenção.

Uma espada precisa de manutenção quando sua durabilidade é inferior a 30.

**Objetivo:** receba a durabilidade de uma espada e informe quando ela precisar de manutenção.

**Requisitos:**
- Trabalhe com valores numéricos.
- Utilize `if`.
- Utilize o operador `<`.
- Considere valores entre 0 e 100 como válidos.

**Testes sugeridos:** 10, 29, 30 e 85.

### Missão 003 — O Baú Misterioso

**Dificuldade:** 1/10

Um aventureiro encontrou um baú contendo determinada quantidade de objetos.

O baú é considerado cheio quando possui mais de 10 objetos.

**Objetivo:** receba a quantidade de objetos e informe quando o baú estiver cheio.

**Requisitos:**
- Utilize uma variável inteira.
- Utilize `if`.
- Trabalhe com o operador `>`.

**Testes sugeridos:** 0, 10, 11 e 20.

### Missão 004 — O Guerreiro Experiente

**Dificuldade:** 2/10

A academia de aventureiros deseja identificar personagens experientes.

Um aventureiro é considerado experiente quando possui pelo menos 20 missões concluídas.

**Objetivo:** receba o número de missões concluídas e informe quando o aventureiro atingir esse requisito.

**Requisitos:**
- Utilize `if`.
- Trabalhe com valores inteiros.
- Utilize o operador `>=`.

### Missão 005 — O Alerta da Floresta

**Dificuldade:** 2/10

Os guardas da vila monitoram o nível de ameaça da floresta.

Quando o nível ultrapassa 70 pontos, um alerta precisa ser emitido.

**Objetivo:** receba o nível de ameaça e emita um alerta quando necessário.

**Requisitos:**
- Utilize uma condicional simples.
- Trabalhe com comparação numérica.
- Utilize o operador `>`.

**Testes sugeridos:** 40, 70, 71 e 100.

### Missão 006 — O Aprendiz de Magia

**Dificuldade:** 2/10

Uma escola de magia deseja identificar aprendizes que possuem energia suficiente para executar um feitiço.

O feitiço exige pelo menos 50 pontos de energia.

**Objetivo:** receba a quantidade de energia e informe quando o aprendiz conseguir executar o feitiço.

**Requisitos:**
- Utilize `if`.
- Trabalhe com valores numéricos.
- Utilize o operador `>=`.
- Não utilize `else`.

### Missão 007 — A Missão da Guilda

**Dificuldade:** 2/10

A guilda deseja identificar missões concluídas.

Uma missão é considerada concluída quando seu status é igual a `"concluida"`.

**Objetivo:** receba o status de uma missão e informe quando ela estiver concluída.

**Requisitos:**
- Trabalhe com strings.
- Utilize comparação de igualdade.
- Utilize uma condicional simples.

### Missão 008 — O Comerciante Generoso

**Dificuldade:** 2/10

Um comerciante oferece uma recompensa especial quando um cliente realiza uma compra superior a 200 unidades monetárias.

**Objetivo:** receba o valor da compra e informe quando o cliente tiver direito à recompensa.

**Requisitos:**
- Trabalhe com valores numéricos decimais.
- Utilize `if`.
- Utilize comparação numérica.

### Missão 009 — O Portador da Chave

**Dificuldade:** 3/10

Uma porta antiga possui um mecanismo de segurança.

Ela somente pode ser aberta quando o visitante possui uma chave, representada por um valor booleano verdadeiro.

**Objetivo:** receba a informação de posse da chave e informe quando o mecanismo poderá ser aberto.

**Requisitos:**
- Trabalhe com booleanos.
- Utilize uma condicional simples.
- Não compare desnecessariamente o booleano com `true` ou `false`.

### Missão 010 — O Primeiro Julgamento

**Dificuldade:** 3/10

O conselho da vila precisa verificar se um visitante possui os requisitos mínimos para participar do treinamento.

Os requisitos são:
- Nível igual ou superior a 10.
- Pelo menos 5 missões concluídas.
- Possuir um equipamento.

**Objetivo:** receba essas três informações e informe quando o visitante cumprir todos os requisitos.

**Requisitos:**
- Utilize uma condicional simples.
- Utilize o operador lógico AND (`&&` em JavaScript e C; `and` em Python).
- Trabalhe com números e booleanos.
- Não utilize `else`.

---

# 2. Etapa II — Aplicação prática

*Missões 011–020 | Primeiras decisões completas.*

Nesta etapa, o programa deverá apresentar resultados diferentes conforme as condições recebidas. O objetivo é compreender os dois caminhos possíveis de uma decisão.

### Missão 011 — O Aventureiro Ferido

**Dificuldade:** 3/10

Um curandeiro precisa identificar a condição de um aventureiro.

**Objetivo:** receba a quantidade de pontos de vida e informe:
- HP acima de zero: aventureiro ativo.
- HP igual ou inferior a zero: aventureiro incapacitado.

**Requisitos:**
- Utilize `if/else`.
- Trabalhe com comparação numérica.

### Missão 012 — O Mercado da Vila

**Dificuldade:** 3/10

Um comerciante precisa verificar se um cliente consegue adquirir uma mercadoria.

**Objetivo:** receba o saldo do cliente e o preço do produto. Informe se a compra pode ser realizada.

Possuir exatamente o valor do produto é suficiente.

**Requisitos:**
- Utilize `if/else`.
- Compare saldo e preço.
- Considere a igualdade como uma compra válida.

### Missão 013 — O Teste do Guerreiro

**Dificuldade:** 3/10

Uma academia deseja classificar o resultado de um teste físico.

A pontuação mínima para aprovação é 60.

**Objetivo:** receba a pontuação e informe se o participante foi aprovado ou reprovado.

**Requisitos:**
- Utilize `if/else`.
- Trabalhe com comparação numérica.

### Missão 014 — A Ponte Quebrada

**Dificuldade:** 3/10

Uma ponte só pode ser atravessada quando está em boas condições.

**Objetivo:** receba um booleano indicando se a ponte está segura e informe se a travessia está liberada ou bloqueada.

**Requisitos:**
- Utilize `if/else`.
- Trabalhe com booleanos.

### Missão 015 — O Pedido do Comerciante

**Dificuldade:** 4/10

Um produto custa 35 unidades monetárias.

**Objetivo:** receba o saldo do visitante e informe:
- Se pode comprar o produto, apresente quanto sobrará.
- Se não pode, apresente quanto ainda falta.

**Requisitos:**
- Utilize `if/else`.
- Realize cálculos aritméticos conforme o resultado da condição.
- Apresente os resultados de maneira clara.

### Missão 016 — O Resultado da Expedição

**Dificuldade:** 4/10

Uma guilda precisa identificar o resultado de uma expedição.

Uma expedição é considerada bem-sucedida quando o participante derrotou pelo menos um inimigo e concluiu o objetivo principal.

**Objetivo:** receba a quantidade de inimigos derrotados e um booleano indicando se o objetivo principal foi concluído. Informe se a expedição foi bem-sucedida ou fracassou.

**Requisitos:**
- Utilize `if/else`.
- Combine comparação numérica e operador lógico AND.

### Missão 017 — O Controle de Estoque

**Dificuldade:** 4/10

Uma loja deseja identificar quando precisa repor mercadorias.

O estoque mínimo é de 10 unidades.

**Objetivo:** receba a quantidade disponível e informe se o estoque precisa de reposição ou está suficiente.

**Requisitos:**
- Utilize `if/else`.
- Trabalhe com comparação numérica.
- Considere exatamente 10 unidades como estoque suficiente.

### Missão 018 — O Portal Antigo

**Dificuldade:** 4/10

Um portal exige uma quantidade mínima de 80 pontos de energia para ser ativado.

**Objetivo:** receba a energia atual e informe se o portal pode ser ativado.

Se não puder, informe quantos pontos faltam.

**Requisitos:**
- Utilize `if/else`.
- Trabalhe com operações aritméticas.
- Apresente o resultado conforme a decisão.

### Missão 019 — O Julgamento do Ferreiro

**Dificuldade:** 4/10

Um ferreiro avalia um equipamento de acordo com sua resistência.

Classificação:
- Resistência igual ou superior a 100: equipamento resistente.
- Resistência inferior a 100: equipamento comum.

**Objetivo:** receba a resistência e apresente a classificação.

**Requisitos:**
- Utilize `if/else`.
- Trabalhe com comparação numérica.

### Missão 020 — O Contrato da Guilda

**Dificuldade:** 5/10

Uma guilda oferece contratos para participantes que atendam a determinados requisitos.

Um contrato pode ser aceito quando:
- O participante possui nível mínimo 15.
- Possui pelo menos 10 missões concluídas.
- Está disponível para trabalhar.

**Objetivo:** receba os dados e informe se o contrato pode ser aceito.

**Requisitos:**
- Utilize `if/else`.
- Combine operadores relacionais e lógicos.
- Trabalhe com números e booleanos.

---

# 3. Etapa III — Combinação de conceitos

*Missões 021–030 | Mais de uma condição.*

Nesta etapa, o objetivo é combinar diferentes condições, construir regras mais elaboradas e compreender como as decisões podem ser organizadas.

### Missão 021 — A Classificação dos Aventureiros

**Dificuldade:** 5/10

A guilda classifica participantes conforme o nível:
- Abaixo de 10: iniciante.
- De 10 a 29: intermediário.
- Igual ou superior a 30: veterano.

**Objetivo:** receba o nível e apresente a classificação.

**Requisitos:**
- Utilize `if/else if/else` ou estrutura equivalente.
- Trabalhe com comparações numéricas.
- Garanta que cada nível pertença a apenas uma classificação.

### Missão 022 — O Cofre dos Anões

**Dificuldade:** 5/10

Um cofre exige duas chaves diferentes para ser aberto.

**Objetivo:** receba dois valores booleanos, representando a posse de cada chave, e informe se o cofre pode ser aberto.

**Requisitos:**
- Utilize o operador lógico AND.
- Trabalhe com booleanos.
- Apresente o resultado utilizando uma condicional.

### Missão 023 — A Escolha do Caminho

**Dificuldade:** 5/10

Um visitante pode entrar na floresta por dois caminhos:
- Caminho A: possui uma bússola.
- Caminho B: possui um mapa.

**Objetivo:** receba essas informações e informe se existe pelo menos um recurso disponível para orientação.

**Requisitos:**
- Utilize o operador lógico OR.
- Trabalhe com booleanos.
- Apresente o resultado utilizando uma condicional.

### Missão 024 — O Imposto do Reino

**Dificuldade:** 5/10

O reino cobra uma taxa de comerciantes com faturamento mensal superior a 5.000 unidades monetárias.

**Objetivo:** receba o faturamento e informe se o comerciante precisa pagar a taxa.

**Requisitos:**
- Utilize comparação numérica.
- Utilize `if/else`.
- Considere o limite de 5.000 corretamente.

### Missão 025 — O Sistema de Recompensas

**Dificuldade:** 5/10

Uma missão oferece uma recompensa especial quando o participante:
- Possui nível mínimo 20; ou
- Derrotou pelo menos 5 monstros.

**Objetivo:** receba as informações e determine se a recompensa especial será liberada.

**Requisitos:**
- Utilize operadores relacionais.
- Utilize o operador lógico OR.
- Trabalhe com uma decisão composta.

### Missão 026 — A Entrada da Masmorra

**Dificuldade:** 5/10

Uma masmorra possui duas restrições:
- O participante precisa ter nível mínimo 15.
- Não pode estar incapacitado.

**Objetivo:** receba o nível e o estado do participante e informe se ele poderá entrar.

**Requisitos:**
- Utilize o operador AND.
- Utilize negação lógica.
- Trabalhe com booleanos e comparações numéricas.

### Missão 027 — A Promoção do Comerciante

**Dificuldade:** 6/10

Uma loja oferece descontos conforme o valor da compra:
- Acima de 500 unidades monetárias: 20%.
- Acima de 200 unidades monetárias até 500: 10%.
- Demais compras: sem desconto.

**Objetivo:** receba o valor da compra, calcule o desconto e apresente o preço final.

**Requisitos:**
- Utilize `if/else if/else`.
- Realize cálculos aritméticos.
- Considere corretamente os limites de cada faixa.

### Missão 028 — O Julgamento dos Elementos

**Dificuldade:** 6/10

Um aprendiz pode utilizar uma técnica especial quando possui pelo menos 30 pontos de energia e domina pelo menos um destes elementos: fogo, água ou terra.

**Objetivo:** receba a energia e três informações booleanas sobre domínio elemental. Determine se a técnica pode ser utilizada.

**Requisitos:**
- Combine AND e OR.
- Trabalhe com múltiplas variáveis booleanas.
- Organize a expressão lógica de maneira clara.

### Missão 029 — O Sistema de Segurança

**Dificuldade:** 6/10

Uma cidade possui um sistema de controle de entrada.

O acesso é permitido quando o visitante possui autorização e não está na lista de bloqueio.

**Objetivo:** receba os dois estados booleanos e determine se o acesso será liberado.

**Requisitos:**
- Utilize AND.
- Utilize negação lógica.
- Apresente o resultado da avaliação.

### Missão 030 — O Conselho dos Anciãos

**Dificuldade:** 7/10

O conselho precisa avaliar se um participante pode assumir a liderança de uma expedição.

Requisitos:
- Nível mínimo 30.
- Pelo menos 20 missões concluídas.
- Possuir equipamento de raridade épica ou lendária.
- Não estar suspenso da guilda.

**Objetivo:** receba as informações e apresente o resultado do julgamento.

**Requisitos:**
- Utilize múltiplas comparações.
- Combine operadores lógicos.
- Trabalhe com strings, números e booleanos.
- Organize as condições de maneira legível.

---

# 4. Etapa IV — Problemas contextualizados

*Missões 031–040 | Aplicações de regras e decisões em situações práticas.*

Nesta etapa, as estruturas condicionais começam a ser utilizadas para resolver problemas contextualizados, semelhantes aos encontrados em sistemas comerciais, administrativos e financeiros.

### Missão 031 — O Sistema de RH da Vila

**Dificuldade:** 7/10

Uma empresa precisa classificar candidatos conforme a idade.

Critérios:
- Menos de 18 anos: não atende à idade mínima.
- De 18 a 59 anos: faixa aceita.
- 60 anos ou mais: encaminhar para avaliação especial.

**Objetivo:** receba a idade e apresente a classificação.

**Requisitos:**
- Utilize condicionais encadeadas.
- Considere corretamente os limites das faixas.
- Trabalhe com comparação numérica.

### Missão 032 — O Caixa da Taverna

**Dificuldade:** 7/10

Uma taverna precisa calcular o valor final de uma conta.

Regras:
- Compras acima de 300 unidades monetárias recebem 15% de desconto.
- Compras acima de 150 até 300 recebem 5%.
- As demais não recebem desconto.

**Objetivo:** receba o total da conta e calcule o valor final.

**Requisitos:**
- Utilize condicionais encadeadas.
- Realize cálculos aritméticos.
- Apresente o desconto e o preço final.

### Missão 033 — O Controle de Acesso Bancário

**Dificuldade:** 7/10

Um banco precisa validar uma operação financeira.

A operação somente será autorizada quando:
- A conta estiver ativa.
- O cliente possuir saldo suficiente.
- A operação não estiver bloqueada por segurança.

**Objetivo:** receba os dados e determine se a operação será autorizada.

**Requisitos:**
- Combine condições booleanas e numéricas.
- Utilize operadores lógicos.
- Apresente o resultado da autorização.

### Missão 034 — A Distribuição de Recursos

**Dificuldade:** 7/10

Um centro de atendimento da vila distribui recursos conforme a faixa etária dos habitantes.

Classificação:
- Menores de 12 anos: categoria infantil.
- De 12 a 59 anos: categoria adulta.
- A partir de 60 anos: categoria especial.

**Objetivo:** receba a idade e apresente a categoria correspondente.

**Requisitos:**
- Utilize condicionais encadeadas.
- Trabalhe com comparação numérica.
- Considere os limites das faixas.

### Missão 035 — O Sistema de Notas da Academia

**Dificuldade:** 7/10

Uma academia utiliza a seguinte classificação:
- Nota inferior a 5: reprovado.
- Nota igual ou superior a 5 e inferior a 7: recuperação.
- Nota igual ou superior a 7: aprovado.

**Objetivo:** receba a nota e apresente a situação acadêmica.

**Requisitos:**
- Utilize condicionais encadeadas.
- Trabalhe com valores decimais.
- Considere corretamente os limites das faixas.

### Missão 036 — O Frete dos Mercadores

**Dificuldade:** 7/10

Uma empresa de transporte cobra frete conforme o valor da compra:
- Compra igual ou superior a 500 unidades monetárias: frete grátis.
- Compra inferior a 500: frete de 30 unidades monetárias.

**Objetivo:** receba o valor da compra e apresente o valor do frete e o total.

**Requisitos:**
- Utilize condicionais.
- Realize cálculos aritméticos.
- Apresente o valor final da operação.

### Missão 037 — O Controle de Ponto

**Dificuldade:** 8/10

Uma empresa precisa identificar a situação de um funcionário conforme o horário de entrada.

Regras:
- Entrada até 08:00: pontual.
- Entrada após 08:00 e até 08:15: atraso tolerado.
- Entrada após 08:15: atraso não tolerado.

**Objetivo:** receba o horário de entrada em horas e minutos e classifique o funcionário.

**Requisitos:**
- Utilize condicionais encadeadas.
- Trabalhe com horas e minutos.
- Considere horários válidos no formato de 24 horas.
- Compare os horários corretamente, considerando também os minutos.

### Missão 038 — O Inventário do Armazém

**Dificuldade:** 8/10

Um armazém precisa classificar a quantidade de produtos disponíveis:
- Estoque igual a zero: esgotado.
- Estoque entre 1 e 10: estoque crítico.
- Estoque entre 11 e 50: estoque baixo.
- Acima de 50: estoque normal.

**Objetivo:** receba a quantidade e apresente a situação.

**Requisitos:**
- Utilize condicionais encadeadas.
- Trabalhe com comparação numérica.
- Considere quantidades inteiras não negativas.

### Missão 039 — O Motor de Aprovação

**Dificuldade:** 8/10

Uma instituição deseja avaliar se um candidato atende aos critérios para participar de um programa.

Regras:
- Nota mínima de 7 na avaliação.
- Não possuir pendências cadastrais.
- Ter pelo menos 6 meses de participação na instituição.

**Objetivo:** receba os dados e informe se o candidato atende aos critérios iniciais.

**Requisitos:**
- Combine condições numéricas e booleanas.
- Utilize operadores lógicos.
- Apresente o resultado da avaliação.

### Missão 040 — O Sistema de Pedidos da Taverna

**Dificuldade:** 8/10

Uma taverna precisa validar pedidos.

Regras:
- O produto precisa existir.
- O estoque precisa ser suficiente.
- O cliente precisa ter saldo suficiente.
- Pedidos acima de 200 unidades monetárias recebem 10% de desconto.

**Objetivo:** receba as informações do pedido, valide a operação e calcule o valor final quando ela for aprovada.

**Requisitos:**
- Combine condições.
- Utilize condicionais encadeadas ou aninhadas.
- Realize cálculos conforme o resultado da validação.
- Informe os motivos da recusa quando o pedido não puder ser concluído.
- Considere a ordem das verificações.

---

# 5. Etapa V — Desafios avançados

*Missões 041–049 | Raciocínio lógico e organização de decisões.*

Nesta etapa, os desafios exigem a combinação de várias regras. O objetivo é desenvolver a capacidade de construir expressões lógicas, organizar decisões e evitar resultados contraditórios.

### Missão 041 — O Detector de Fraudes

**Dificuldade:** 8/10

Um banco monitora transações suspeitas.

Uma operação será sinalizada quando:
- O valor for superior a 1.000 unidades monetárias; ou
- O acesso ocorrer em um dispositivo desconhecido e o país de acesso for diferente do habitual.

**Objetivo:** receba os dados e determine se a operação deve ser sinalizada.

**Requisitos:**
- Combine AND e OR.
- Utilize comparações numéricas e booleanas.
- Organize corretamente a precedência das operações lógicas.

### Missão 042 — O Sistema de Progressão de Classes

**Dificuldade:** 8/10

Um sistema de treinamento precisa verificar se um participante pode avançar para uma nova categoria.

Regras:
- Nível mínimo 20.
- Pelo menos 10 atividades concluídas.
- Possuir equipamento adequado.
- Não estar participando de outra atividade.

**Objetivo:** valide os requisitos e apresente se a progressão está disponível.

**Requisitos:**
- Utilize múltiplas condições.
- Combine operadores lógicos.
- Apresente o resultado da avaliação.

### Missão 043 — O Gerenciador de Reservas

**Dificuldade:** 9/10

Uma hospedaria precisa verificar a disponibilidade de quartos.

Regras:
- O quarto precisa estar disponível.
- O cliente precisa ter saldo suficiente para a reserva.
- Reservas com mais de 5 noites recebem 10% de desconto.
- Reservas com 5 noites ou menos não recebem desconto.

**Objetivo:** valide a reserva e calcule o preço final.

**Requisitos:**
- Utilize condições booleanas e numéricas.
- Valide a quantidade de noites.
- Calcule o desconto somente quando a reserva for válida.
- Apresente o motivo da recusa, quando houver.

### Missão 044 — O Sistema de Vantagens Elementais

**Dificuldade:** 9/10

Um sistema de treinamento utiliza vantagens entre três elementos.

Regras:
- Fogo vence gelo.
- Gelo vence natureza.
- Natureza vence fogo.
- Elementos iguais resultam em empate.
- Qualquer outra combinação resulta em confronto equilibrado.

**Objetivo:** receba o elemento do participante e do adversário e determine o resultado.

**Requisitos:**
- Utilize condicionais encadeadas.
- Trabalhe com comparações de strings.
- Considere todas as combinações possíveis.
- Trate elementos desconhecidos como entradas inválidas.

### Missão 045 — O Sistema de Tarifas

**Dificuldade:** 9/10

Um serviço de transporte cobra conforme a distância percorrida:
- Até 5 km: tarifa fixa de 10 unidades monetárias.
- Acima de 5 km até 15 km: 2 unidades monetárias por quilômetro.
- Acima de 15 km: 1,50 unidade monetária por quilômetro.

**Objetivo:** receba a distância e calcule a tarifa conforme a faixa correspondente.

Para as duas últimas faixas, utilize a distância total multiplicada pela tarifa daquela faixa.

**Requisitos:**
- Utilize condicionais encadeadas.
- Realize cálculos aritméticos.
- Considere distâncias não negativas.
- Trate corretamente os limites de cada faixa.

### Missão 046 — O Gerenciador de Permissões

**Dificuldade:** 9/10

Uma aplicação possui três perfis:
- Administrador: acesso completo.
- Gerente: acesso a relatórios e gerenciamento de produtos.
- Funcionário: acesso apenas ao registro de pedidos.

**Objetivo:** receba o perfil e o recurso solicitado e determine se o acesso está autorizado.

**Requisitos:**
- Utilize condicionais aninhadas ou encadeadas.
- Diferencie perfis e recursos.
- Informe quando o perfil não existir.
- Informe quando o recurso não estiver autorizado para o perfil.

### Missão 047 — O Sistema de Multas

**Dificuldade:** 9/10

O reino possui regras de trânsito para carruagens.

Limites:
- Até 40 km/h: sem multa.
- Acima de 40 até 60 km/h: multa de 50 unidades monetárias.
- Acima de 60 até 80 km/h: multa de 100 unidades monetárias.
- Acima de 80 km/h: multa de 250 unidades monetárias.

**Objetivo:** receba a velocidade e calcule a multa correspondente.

**Requisitos:**
- Utilize condicionais encadeadas.
- Trabalhe com comparações numéricas.
- Trate corretamente os limites de cada faixa.
- Considere velocidades não negativas.

### Missão 048 — O Sistema de Benefícios

**Dificuldade:** 9/10

Uma empresa oferece benefícios aos funcionários conforme o tempo de serviço.

Regras:
- Funcionários com pelo menos 12 meses recebem vale-alimentação.
- Funcionários com pelo menos 24 meses recebem também bônus.
- Funcionários com pelo menos 60 meses recebem também dias adicionais de férias.

**Objetivo:** receba o tempo de empresa e apresente todos os benefícios conquistados.

**Requisitos:**
- Utilize condicionais simples, compostas ou aninhadas.
- Apresente todos os benefícios acumulados.
- Não apresente apenas o benefício da faixa mais alta.
- Considere o tempo de serviço em meses.

### Missão 049 — O Julgamento do Rei

**Dificuldade:** 10/10

Uma instituição precisa decidir se um candidato está preparado para assumir uma posição de liderança.

Requisitos:
- Nível mínimo 40.
- Pelo menos 30 atividades concluídas.
- Equipamento épico ou lendário.
- Pelo menos 100 pontos de vida.
- Não estar incapacitado.
- Ter concluído uma atividade de liderança.
- Não estar suspenso.

**Objetivo:** receba todos os dados e apresente:
- Aprovado, caso cumpra todos os requisitos.
- Reprovado, caso não cumpra.
- Todos os requisitos que não foram atendidos.

**Requisitos:**
- Organize suas condições de maneira clara.
- Evite repetir verificações desnecessariamente.
- Não encerre a avaliação ao encontrar o primeiro problema.
- Identifique informações inválidas.
- Apresente todos os motivos da reprovação.

---

# 6. Etapa VI — Desafio de consolidação

## Missão 050 — A Restauração da Vila

**Dificuldade:** 10/10

< CHEFE FINAL DA REGIÃO >

### História

Os mecanismos responsáveis pelo funcionamento da Vila dos Iniciantes foram comprometidos.

Os habitantes não conseguem mais controlar os sistemas de acesso, os mecanismos de segurança e as estruturas de decisão da comunidade.

Para restaurar a vila, será necessário desenvolver um sistema capaz de avaliar diferentes situações e determinar as ações corretas.

Não será suficiente resolver uma condição isolada. Será necessário combinar os conhecimentos adquiridos ao longo das 49 missões anteriores.

### Objetivo

Desenvolva um programa para avaliar se determinado mecanismo da vila pode ser restaurado.

O programa deverá receber as informações de um mecanismo, verificar suas condições e apresentar o resultado da avaliação.

### Dados de entrada

O sistema deverá receber:
- Identificação do mecanismo.
- Estado atual do mecanismo.
- Nível de energia disponível.
- Nível mínimo de energia exigido.
- Estado da autorização de acesso.
- Estado da conexão com o sistema central.

### Regras de restauração

1. O mecanismo precisa possuir uma identificação válida.
2. O mecanismo não pode estar marcado como destruído.
3. A energia disponível precisa ser igual ou superior à energia exigida.
4. O responsável precisa possuir autorização.
5. A conexão com o sistema central precisa estar ativa.

### Decisões do sistema

O programa deverá:
- Identificar mecanismos inexistentes.
- Impedir a restauração de mecanismos destruídos.
- Informar quando a energia for insuficiente.
- Negar a restauração quando não houver autorização.
- Identificar quando a conexão estiver indisponível.
- Autorizar a restauração somente quando todos os requisitos forem atendidos.

### Classificação de prioridade

O sistema também deverá classificar os mecanismos:

- Mecanismo central: prioridade crítica.
- Mecanismo de segurança: prioridade alta.
- Mecanismo de acesso: prioridade normal.
- Mecanismo auxiliar: prioridade baixa.

A classificação deverá ser apresentada somente quando o mecanismo for reconhecido.

### Relatório final

Apresente:
- Identificação do mecanismo.
- Resultado da avaliação.
- Prioridade do mecanismo, quando reconhecido.
- Situação final: restaurado ou não restaurado.
- Todos os motivos que impediram a restauração, quando houver.

### Restrições

- Não utilizar bibliotecas externas.
- Não utilizar estruturas de repetição.
- Não utilizar funções ou modularização.
- Não utilizar arrays, listas ou objetos.
- Não utilizar `switch/case`.
- Utilizar condicionais simples, compostas e aninhadas.
- Organizar as decisões de maneira legível.
- Validar os dados recebidos.
- Apresentar todos os problemas identificados, não apenas o primeiro.

### Critérios de aprovação

A implementação deverá:

1. Avaliar corretamente todas as condições.
2. Identificar dados e estados inválidos.
3. Impedir restaurações quando qualquer requisito obrigatório não for atendido.
4. Apresentar todos os motivos de impedimento.
5. Classificar corretamente a prioridade dos mecanismos.
6. Produzir resultados consistentes em diferentes cenários de teste.
7. Manter o código organizado e compreensível.

**Conclusão da Região 01:** ao finalizar esta missão nas três linguagens, o estudante deverá demonstrar domínio dos fundamentos de programação, operadores e estruturas condicionais.

**A jornada continua na Floresta dos Ciclos.**