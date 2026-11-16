# CODE REALMS 300
# Região 01 — Vila dos Iniciantes
## Livro de Missões

**Entrega:** 01 de 06  
**Quantidade:** 50 missões  
**Tema:** Estruturas condicionais  
**Linguagens:** C, Python e JavaScript/Node.js

---

# 1. Etapa I — Aprendizagem e reconhecimento

*Missões 001–010 | Primeiro contato com as decisões.*

O aventureiro começa a compreender como os mecanismos da vila interpretam informações e tomam decisões.

### Missão 001 — O Portão da Vila

**Dificuldade:** 1/10 | **Recompensa:** 20 XP

Um guarda controla a entrada da vila.

Para entrar, o aventureiro precisa possuir nível igual ou superior a 5.

**Objetivo:** receba o nível do aventureiro e informe se ele está autorizado a entrar.

**Requisitos:**
- Utilize uma condicional simples.
- Não utilize `else`.
- Exiba uma mensagem somente quando a condição for verdadeira.

**Testes sugeridos:** níveis 3, 5 e 10.

### Missão 002 — A Espada Enferrujada

**Dificuldade:** 1/10 | **Recompensa:** 20 XP

Um ferreiro precisa identificar equipamentos danificados.

Uma espada está enferrujada quando sua durabilidade é inferior a 30.

**Objetivo:** receba a durabilidade de uma espada e informe quando ela precisar de manutenção.

**Requisitos:**
- Utilize `if`.
- Trabalhe com valores numéricos.
- Considere valores entre 0 e 100 como válidos.

**Testes sugeridos:** 10, 29, 30 e 85.

### Missão 003 — O Baú Misterioso

**Dificuldade:** 1/10 | **Recompensa:** 20 XP

Um aventureiro encontrou um baú contendo determinada quantidade de objetos.

O baú é considerado cheio quando possui mais de 10 objetos.

**Objetivo:** receba a quantidade de objetos e informe quando o baú estiver cheio.

**Requisitos:**
- Utilize uma condicional simples.
- Trabalhe com o operador `>`.

**Testes sugeridos:** 0, 10, 11 e 20.

### Missão 004 — O Guerreiro Experiente

**Dificuldade:** 2/10 | **Recompensa:** 25 XP

A academia de aventureiros deseja identificar personagens experientes.

Um aventureiro é considerado experiente quando possui pelo menos 20 missões concluídas.

**Objetivo:** receba o número de missões concluídas e informe quando o aventureiro atingir esse requisito.

**Requisitos:**
- Utilize `if`.
- Trabalhe com valores inteiros.
- Utilize o operador `>=`.

### Missão 005 — O Alerta da Floresta

**Dificuldade:** 2/10 | **Recompensa:** 25 XP

Os guardas da vila monitoram o nível de ameaça da floresta.

Quando o nível ultrapassa 70 pontos, um alerta precisa ser emitido.

**Objetivo:** receba o nível de ameaça e emita um alerta quando necessário.

**Requisitos:**
- Utilize uma condicional simples.
- Trabalhe com comparação numérica.

**Testes sugeridos:** 40, 70, 71 e 100.

### Missão 006 — O Aprendiz de Magia

**Dificuldade:** 2/10 | **Recompensa:** 25 XP

Uma escola de magia deseja identificar aprendizes que possuem energia suficiente para executar um feitiço.

O feitiço exige pelo menos 50 pontos de energia.

**Objetivo:** receba a quantidade de energia e informe quando o aprendiz conseguir executar o feitiço.

**Requisitos:**
- Utilize `if`.
- Utilize comparação numérica.
- Não utilize `else`.

### Missão 007 — A Missão da Guilda

**Dificuldade:** 2/10 | **Recompensa:** 25 XP

A guilda deseja identificar missões concluídas.

Uma missão é considerada concluída quando seu status é igual a `"concluida"`.

**Objetivo:** receba o status de uma missão e informe quando ela estiver concluída.

**Requisitos:**
- Utilize comparação de igualdade.
- Trabalhe com strings.
- Utilize uma condicional simples.

### Missão 008 — O Comerciante Generoso

**Dificuldade:** 2/10 | **Recompensa:** 30 XP

Um comerciante oferece uma recompensa especial quando um cliente realiza uma compra superior a 200 unidades monetárias.

**Objetivo:** receba o valor da compra e informe quando o cliente tiver direito à recompensa.

**Requisitos:**
- Utilize `if`.
- Trabalhe com valores decimais.
- Utilize comparação numérica.

### Missão 009 — O Portador da Chave

**Dificuldade:** 3/10 | **Recompensa:** 30 XP

Uma porta antiga possui um mecanismo de segurança.

Ela somente pode ser aberta quando o aventureiro possui uma chave, representada por um valor booleano verdadeiro.

**Objetivo:** receba a informação de posse da chave e informe se o mecanismo poderá ser aberto.

**Requisitos:**
- Trabalhe com booleanos.
- Utilize uma condicional simples.
- Não compare desnecessariamente o booleano com `true` ou `false`.

### Missão 010 — O Primeiro Julgamento

**Dificuldade:** 3/10 | **Recompensa:** 40 XP

O conselho da vila precisa verificar se um aventureiro possui os requisitos mínimos para participar do treinamento.

Os requisitos são:
- Nível igual ou superior a 10.
- Pelo menos 5 missões concluídas.
- Possuir um equipamento.

**Objetivo:** receba essas três informações e informe quando o aventureiro cumprir todos os requisitos.

**Requisitos:**
- Utilize uma condicional simples.
- Utilize o operador lógico AND (`&&` em JavaScript e C; `and` em Python).
- Não utilize `else`.
- Trabalhe com números e booleanos.

**Marco de progressão:** ao concluir esta missão e atingir 10 missões aprovadas, o personagem desbloqueia o título **Recruta da Vila**.

---

# 2. Etapa II — Aplicação prática

*Missões 011–020 | Primeiras decisões completas.*

Agora os mecanismos da vila precisam tomar decisões diferentes conforme as condições recebidas. O aventureiro começará a trabalhar com dois caminhos possíveis.

### Missão 011 — O Aventureiro Ferido

**Dificuldade:** 3/10 | **Recompensa:** 35 XP

Um curandeiro precisa identificar a condição de um aventureiro.

**Objetivo:** receba a quantidade de pontos de vida e informe:
- HP acima de zero: aventureiro ativo.
- HP igual ou inferior a zero: aventureiro incapacitado.

**Requisitos:** utilize `if/else` e comparação numérica.

### Missão 012 — O Mercado da Vila

**Dificuldade:** 3/10 | **Recompensa:** 35 XP

Um comerciante precisa verificar se um cliente consegue adquirir uma mercadoria.

**Objetivo:** receba o saldo do cliente e o preço do produto. Informe se a compra pode ser realizada.

Possuir exatamente o valor do produto é suficiente.

**Requisitos:**
- Utilize `if/else`.
- Compare saldo e preço.
- Considere a igualdade como uma compra válida.

### Missão 013 — O Teste do Guerreiro

**Dificuldade:** 3/10 | **Recompensa:** 35 XP

Uma academia deseja classificar o resultado de um teste físico.

A pontuação mínima para aprovação é 60.

**Objetivo:** receba a pontuação e informe se o guerreiro foi aprovado ou reprovado.

**Requisitos:** utilize `if/else` e comparação numérica.

### Missão 014 — A Ponte Quebrada

**Dificuldade:** 3/10 | **Recompensa:** 40 XP

Uma ponte só pode ser atravessada quando está em boas condições.

**Objetivo:** receba um booleano indicando se a ponte está segura e informe se a travessia está liberada ou bloqueada.

**Requisitos:** utilize `if/else` e trabalhe com booleanos.

### Missão 015 — O Pedido do Comerciante

**Dificuldade:** 4/10 | **Recompensa:** 40 XP

Um produto custa 35 unidades monetárias.

**Objetivo:** receba o saldo do aventureiro e informe:
- Se pode comprar o produto, apresente quanto sobrará.
- Se não pode, apresente quanto ainda falta.

**Requisitos:**
- Utilize `if/else`.
- Realize cálculos conforme o resultado da condição.

### Missão 016 — O Resultado da Expedição

**Dificuldade:** 4/10 | **Recompensa:** 40 XP

Uma guilda precisa identificar o resultado de uma expedição.

Uma expedição é considerada bem-sucedida quando o aventureiro derrotou pelo menos um inimigo e concluiu o objetivo principal.

**Objetivo:** receba a quantidade de inimigos derrotados e um booleano indicando se o objetivo principal foi concluído. Informe se a expedição foi bem-sucedida ou fracassou.

**Requisitos:** utilize `if/else` e operadores lógicos.

### Missão 017 — O Controle de Estoque

**Dificuldade:** 4/10 | **Recompensa:** 40 XP

Uma loja deseja identificar quando precisa repor mercadorias.

O estoque mínimo é de 10 unidades.

**Objetivo:** receba a quantidade disponível e informe se o estoque precisa de reposição ou está suficiente.

**Requisitos:** utilize `if/else` e comparação numérica.

### Missão 018 — O Portal Antigo

**Dificuldade:** 4/10 | **Recompensa:** 45 XP

Um portal exige uma quantidade mínima de 80 pontos de energia para ser ativado.

**Objetivo:** receba a energia atual e informe se o portal pode ser ativado.

Se não puder, informe quantos pontos faltam.

**Requisitos:** utilize `if/else` e operações aritméticas.

### Missão 019 — O Julgamento do Ferreiro

**Dificuldade:** 4/10 | **Recompensa:** 45 XP

Um ferreiro avalia um equipamento de acordo com sua resistência.

Classificação:
- Resistência igual ou superior a 100: equipamento resistente.
- Resistência inferior a 100: equipamento comum.

**Objetivo:** receba a resistência e apresente a classificação.

**Requisitos:** utilize `if/else` e comparação numérica.

### Missão 020 — O Contrato da Guilda

**Dificuldade:** 5/10 | **Recompensa:** 50 XP

Uma guilda oferece contratos para aventureiros.

Um contrato pode ser aceito quando:
- O aventureiro possui nível mínimo 15.
- Possui pelo menos 10 missões concluídas.
- Está disponível para trabalhar.

**Objetivo:** receba os dados e informe se o contrato pode ser aceito.

**Requisitos:** utilize `if/else`, operadores relacionais e operadores lógicos.

**Marco de progressão:** ao concluir esta missão e atingir 20 missões aprovadas, o personagem desbloqueia o título **Aprendiz da Lógica**.

---

# 3. Etapa III — Combinação de conceitos

*Missões 021–030 | Mais de uma condição.*

O aventureiro já compreende decisões simples. Agora deverá combinar condições e utilizar operadores lógicos para construir regras mais elaboradas.

### Missão 021 — A Classificação dos Aventureiros

**Dificuldade:** 5/10 | **Recompensa:** 50 XP

A guilda classifica aventureiros conforme o nível:
- Abaixo de 10: iniciante.
- De 10 a 29: intermediário.
- Igual ou superior a 30: veterano.

**Objetivo:** receba o nível e apresente a classificação.

**Requisitos:** utilize `if/else if/else` ou a estrutura equivalente da linguagem.

### Missão 022 — O Cofre dos Anões

**Dificuldade:** 5/10 | **Recompensa:** 50 XP

Um cofre exige duas chaves diferentes para ser aberto.

**Objetivo:** receba dois booleanos, representando a posse de cada chave, e informe se o cofre pode ser aberto.

**Requisitos:** utilize o operador lógico AND.

### Missão 023 — A Escolha do Caminho

**Dificuldade:** 5/10 | **Recompensa:** 50 XP

Um aventureiro pode entrar na floresta por dois caminhos:
- Caminho A: possui uma bússola.
- Caminho B: possui um mapa.

**Objetivo:** receba essas informações e informe se existe pelo menos um recurso disponível para orientação.

**Requisitos:** utilize o operador lógico OR.

### Missão 024 — O Imposto do Reino

**Dificuldade:** 5/10 | **Recompensa:** 55 XP

O reino cobra uma taxa de comerciantes com faturamento mensal superior a 5.000 unidades monetárias.

**Objetivo:** receba o faturamento e informe se o comerciante precisa pagar a taxa.

**Requisitos:** utilize comparação numérica e `if/else`.

### Missão 025 — O Sistema de Recompensas

**Dificuldade:** 5/10 | **Recompensa:** 55 XP

Uma missão oferece recompensa especial quando o aventureiro:
- Possui nível mínimo 20; ou
- Derrotou pelo menos 5 monstros.

**Objetivo:** receba as informações e determine se a recompensa especial será liberada.

**Requisitos:** utilize operadores relacionais e OR.

### Missão 026 — A Entrada da Masmorra

**Dificuldade:** 5/10 | **Recompensa:** 55 XP

Uma masmorra possui duas restrições:
- O aventureiro precisa ter nível mínimo 15.
- Não pode estar incapacitado.

**Objetivo:** receba o nível e o estado do aventureiro e informe se ele poderá entrar.

**Requisitos:** utilize AND e negação lógica.

### Missão 027 — A Promoção do Comerciante

**Dificuldade:** 6/10 | **Recompensa:** 60 XP

Uma loja oferece descontos conforme o valor da compra:
- Acima de 500 unidades monetárias: 20%.
- Acima de 200 unidades monetárias: 10%.
- Demais compras: sem desconto.

**Objetivo:** receba o valor da compra, calcule o desconto e apresente o preço final.

**Requisitos:** utilize `if/else if/else` e cálculos aritméticos.

### Missão 028 — O Julgamento dos Elementos

**Dificuldade:** 6/10 | **Recompensa:** 60 XP

Um aprendiz pode utilizar uma técnica especial quando possui pelo menos 30 pontos de energia e domina pelo menos um destes elementos: fogo, água ou terra.

**Objetivo:** receba a energia e três informações booleanas sobre domínio elemental. Determine se a técnica pode ser utilizada.

**Requisitos:** combine AND e OR.

### Missão 029 — O Sistema de Segurança

**Dificuldade:** 6/10 | **Recompensa:** 60 XP

Uma cidade possui um sistema de controle de entrada.

O acesso é permitido quando o visitante possui autorização e não está na lista de bloqueio.

**Objetivo:** receba os dois estados booleanos e determine se o acesso será liberado.

**Requisitos:** utilize AND e negação lógica.

### Missão 030 — O Conselho dos Anciãos

**Dificuldade:** 7/10 | **Recompensa:** 70 XP

O conselho precisa avaliar se um aventureiro pode se tornar líder de uma expedição.

Requisitos:
- Nível mínimo 30.
- Pelo menos 20 missões concluídas.
- Possuir equipamento de raridade épica ou lendária.
- Não estar suspenso da guilda.

**Objetivo:** receba as informações e apresente o resultado do julgamento.

**Requisitos:** utilize múltiplas comparações, operadores lógicos e condicionais compostas.

**Marco de progressão:** ao concluir esta missão e atingir 30 missões aprovadas, o personagem desbloqueia o título **Desbravador das Condições**.

---

# 4. Etapa IV — Problemas contextualizados

*Missões 031–040 | Aplicações do mundo real.*

Os mecanismos da vila precisam de soluções mais elaboradas. O aventureiro começará a desenvolver pequenas regras de negócio, semelhantes às encontradas em sistemas comerciais, administrativos e de autenticação.

### Missão 031 — O Sistema de RH da Vila

**Dificuldade:** 7/10 | **Recompensa:** 70 XP

Uma empresa da vila precisa classificar candidatos para uma vaga.

Critérios:
- Menos de 18 anos: não atende à idade mínima.
- De 18 a 59 anos: faixa aceita.
- 60 anos ou mais: encaminhar para avaliação especial.

**Objetivo:** receba a idade e apresente a classificação.

**Requisitos:** utilize condicionais encadeadas e considere os limites das faixas.

### Missão 032 — O Caixa da Taverna

**Dificuldade:** 7/10 | **Recompensa:** 70 XP

Uma taverna precisa calcular o valor final de uma conta.

Regras:
- Compras acima de 300 unidades monetárias recebem 15% de desconto.
- Compras acima de 150 recebem 5%.
- As demais não recebem desconto.

**Objetivo:** receba o total da conta e calcule o valor final.

**Requisitos:** utilize condicionais encadeadas e cálculos aritméticos.

### Missão 033 — O Controle de Acesso Bancário

**Dificuldade:** 7/10 | **Recompensa:** 75 XP

Um banco medieval precisa validar uma operação financeira.

A operação somente será autorizada quando:
- A conta estiver ativa.
- O cliente possuir saldo suficiente.
- A operação não estiver bloqueada por segurança.

**Objetivo:** receba os dados e determine se a operação será autorizada.

**Requisitos:** combine condições booleanas e numéricas.

### Missão 034 — A Distribuição de Recursos

**Dificuldade:** 7/10 | **Recompensa:** 75 XP

Um centro de atendimento da vila distribui recursos conforme a faixa etária dos habitantes.

Classificação:
- Menores de 12 anos: categoria infantil.
- De 12 a 59 anos: categoria adulta.
- A partir de 60 anos: categoria especial.

**Objetivo:** receba a idade e apresente a categoria correspondente.

**Requisitos:** utilize condicionais encadeadas e comparação numérica.

### Missão 035 — O Sistema de Notas da Academia

**Dificuldade:** 7/10 | **Recompensa:** 75 XP

Uma academia utiliza a seguinte classificação:
- Nota inferior a 5: reprovado.
- Nota de 5 até menos de 7: recuperação.
- Nota igual ou superior a 7: aprovado.

**Objetivo:** receba a nota e apresente a situação acadêmica.

**Requisitos:** utilize condicionais encadeadas e considere os limites das faixas.

### Missão 036 — O Frete dos Mercadores

**Dificuldade:** 7/10 | **Recompensa:** 80 XP

Uma empresa de transporte cobra frete conforme o valor da compra:
- Compra igual ou superior a 500 unidades monetárias: frete grátis.
- Compra inferior a 500: frete de 30 unidades monetárias.

**Objetivo:** receba o valor da compra e apresente o valor do frete e o total.

**Requisitos:** utilize condicionais e cálculos aritméticos.

### Missão 037 — O Controle de Ponto

**Dificuldade:** 8/10 | **Recompensa:** 80 XP

Uma empresa precisa identificar a situação de um funcionário.

Regras:
- Entrada até 08:00: pontual.
- Entrada após 08:00 e até 08:15: atraso tolerado.
- Entrada após 08:15: atraso não tolerado.

**Objetivo:** receba o horário de entrada em horas e minutos e classifique o funcionário.

**Requisitos:**
- Utilize condicionais encadeadas.
- Trabalhe com horas e minutos.
- Considere horários válidos no formato de 24 horas.

### Missão 038 — O Inventário do Armazém

**Dificuldade:** 8/10 | **Recompensa:** 80 XP

Um armazém precisa classificar a quantidade de produtos disponíveis:
- Estoque igual a zero: esgotado.
- Estoque entre 1 e 10: estoque crítico.
- Estoque entre 11 e 50: estoque baixo.
- Acima de 50: estoque normal.

**Objetivo:** receba a quantidade e apresente a situação.

**Requisitos:** utilize condicionais encadeadas e comparação numérica.

### Missão 039 — O Motor de Aprovação

**Dificuldade:** 8/10 | **Recompensa:** 85 XP

Uma instituição deseja avaliar se um candidato atende aos critérios para participar de um programa.

Regras:
- Nota mínima de 7 na avaliação.
- Não possuir pendências cadastrais.
- Ter pelo menos 6 meses de participação na instituição.

**Objetivo:** receba os dados e informe se o candidato atende aos critérios iniciais.

**Requisitos:** combine condições numéricas e booleanas.

### Missão 040 — O Sistema de Pedidos da Taverna

**Dificuldade:** 8/10 | **Recompensa:** 90 XP

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
- Informe o motivo da recusa quando o pedido não puder ser concluído.

**Marco de progressão:** ao concluir esta missão e atingir 40 missões aprovadas, o personagem desbloqueia o título **Restaurador de Mecanismos**.

---

# 5. Etapa V — Desafios avançados

*Missões 041–049 | Raciocínio e organização de decisões.*

Os últimos mecanismos da vila são mais complexos. O aventureiro precisará organizar regras, validar múltiplas informações e evitar decisões contraditórias.

### Missão 041 — O Detector de Fraudes

**Dificuldade:** 8/10 | **Recompensa:** 100 XP

Um banco monitora transações suspeitas.

Uma operação será sinalizada quando:
- O valor for superior a 1.000 unidades monetárias; ou
- O acesso ocorrer em um dispositivo desconhecido e o país de acesso for diferente do habitual.

**Objetivo:** receba os dados e determine se a operação deve ser sinalizada.

**Requisitos:** combine AND e OR em uma expressão lógica.

### Missão 042 — O Sistema de Progressão de Classes

**Dificuldade:** 8/10 | **Recompensa:** 100 XP

Um aventureiro deseja evoluir de classe.

Regras:
- Nível mínimo 20.
- Pelo menos 10 missões concluídas.
- Possuir um equipamento adequado.
- Não estar participando de outra missão.

**Objetivo:** valide os requisitos e apresente se a evolução está disponível.

**Requisitos:** utilize múltiplas condições e operadores lógicos.

### Missão 043 — O Gerenciador de Reservas

**Dificuldade:** 9/10 | **Recompensa:** 100 XP

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

### Missão 044 — O Sistema de Vantagens Elementais

**Dificuldade:** 9/10 | **Recompensa:** 110 XP

Um sistema de treinamento utiliza vantagens entre três elementos.

Regras:
- Fogo vence gelo.
- Gelo vence natureza.
- Natureza vence fogo.
- Elementos iguais resultam em empate.
- Qualquer outra combinação resulta em confronto equilibrado.

**Objetivo:** receba o elemento do participante e do adversário e determine o resultado.

**Requisitos:** utilize condicionais encadeadas e comparações de strings.

### Missão 045 — O Sistema de Tarifas

**Dificuldade:** 9/10 | **Recompensa:** 110 XP

Um serviço de transporte cobra conforme a distância percorrida:
- Até 5 km: tarifa fixa de 10 unidades monetárias.
- Acima de 5 km até 15 km: 2 unidades monetárias por quilômetro.
- Acima de 15 km: 1,50 unidade monetária por quilômetro.

**Objetivo:** receba a distância e calcule a tarifa conforme a faixa correspondente.

Para as duas últimas faixas, utilize a distância total multiplicada pela tarifa daquela faixa.

**Requisitos:** utilize condicionais encadeadas e cálculos aritméticos.

### Missão 046 — O Gerenciador de Permissões

**Dificuldade:** 9/10 | **Recompensa:** 110 XP

Uma aplicação possui três perfis:
- Administrador: acesso completo.
- Gerente: acesso a relatórios e gerenciamento de produtos.
- Funcionário: acesso apenas ao registro de pedidos.

**Objetivo:** receba o perfil e o recurso solicitado e determine se o acesso está autorizado.

**Requisitos:**
- Utilize condicionais aninhadas ou encadeadas.
- Diferencie perfis e recursos.
- Informe quando o perfil não existir ou quando o acesso for negado.

### Missão 047 — O Sistema de Multas

**Dificuldade:** 9/10 | **Recompensa:** 120 XP

O reino possui regras de trânsito para carruagens.

Limites:
- Até 40 km/h: sem multa.
- Acima de 40 até 60 km/h: multa de 50 unidades monetárias.
- Acima de 60 até 80 km/h: multa de 100 unidades monetárias.
- Acima de 80 km/h: multa de 250 unidades monetárias.

**Objetivo:** receba a velocidade e calcule a multa correspondente.

**Requisitos:** utilize condicionais encadeadas e trate corretamente os limites de cada faixa.

### Missão 048 — O Sistema de Benefícios

**Dificuldade:** 9/10 | **Recompensa:** 120 XP

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

### Missão 049 — O Julgamento do Rei

**Dificuldade:** 10/10 | **Recompensa:** 150 XP

O rei precisa decidir se um aventureiro está preparado para comandar uma expedição.

Requisitos:
- Nível mínimo 40.
- Pelo menos 30 missões concluídas.
- Equipamento épico ou lendário.
- Pelo menos 100 pontos de vida.
- Não estar incapacitado.
- Ter concluído uma missão de liderança.
- Não estar suspenso.

**Objetivo:** receba todos os dados e apresente:
- Aprovado, caso cumpra todos os requisitos.
- Reprovado, caso não cumpra.
- Todos os requisitos que não foram atendidos.

**Requisitos:**
- Organize suas condições de maneira clara.
- Evite repetir verificações desnecessariamente.
- Não encerre a avaliação ao encontrar o primeiro problema.
- Considere valores inválidos como inconsistências.

---

# 6. Etapa VI — Chefe da região

## Missão 050 — A Restauração da Vila

< CHEFE FINAL DA REGIÃO >

**Dificuldade:** 10/10 | **Recompensa:** 300 XP

### História

O Guardião Ancestral despertou e começou a destruir os mecanismos responsáveis pelo funcionamento da Vila dos Iniciantes.

Os habitantes não conseguem mais controlar os sistemas de acesso, os mecanismos de segurança e as estruturas de decisão da comunidade.

Para restaurar a vila, o aventureiro deverá construir um sistema capaz de avaliar diferentes situações e determinar as ações corretas.

Não será suficiente resolver uma condição isolada. Será necessário combinar tudo o que foi aprendido ao longo da região.

### Objetivo

Desenvolva um sistema de restauração dos mecanismos da vila.

O programa deverá receber as informações de um mecanismo e verificar se ele pode ser restaurado.

### Dados de entrada

O sistema deverá receber:
- Identificação do mecanismo.
- Estado atual do mecanismo.
- Nível de energia disponível.
- Nível mínimo de energia exigido.
- Estado da autorização de acesso.
- Estado da conexão com o sistema central.

### Regras de restauração

1. O mecanismo precisa estar identificado corretamente.
2. O mecanismo não pode estar marcado como destruído.
3. A energia disponível precisa ser igual ou superior à energia exigida.
4. O aventureiro precisa possuir autorização.
5. A conexão com o sistema central precisa estar ativa.

### Decisões do sistema

O programa deverá:
- Identificar mecanismos inexistentes.
- Impedir a restauração de mecanismos destruídos.
- Informar quando a energia for insuficiente.
- Negar a restauração quando não houver autorização.
- Identificar quando a conexão estiver indisponível.
- Autorizar a restauração somente quando todos os requisitos forem atendidos.

### Relatório final

Apresentar:
- Identificação do mecanismo.
- Resultado da avaliação.
- Situação final: restaurado ou não restaurado.
- Todos os motivos que impediram a restauração, quando houver.

### Desafio adicional

Implemente uma classificação de prioridade:

- Prioridade crítica: mecanismo central.
- Prioridade alta: mecanismo de segurança.
- Prioridade normal: mecanismo de acesso.
- Prioridade baixa: mecanismo auxiliar.

A classificação deverá ser apresentada somente quando o mecanismo for reconhecido.

### Restrições

- Não utilizar bibliotecas externas.
- Não utilizar `switch/case`.
- Não utilizar estruturas de repetição.
- Utilizar condicionais simples, compostas e aninhadas.
- Organizar as decisões de maneira legível.
- Validar os dados recebidos.
- Apresentar todos os problemas identificados, não apenas o primeiro.

### Critério de aprovação

O sistema deverá funcionar corretamente nos diferentes cenários, respeitar todas as regras de restauração e evitar decisões contraditórias.

**Marco de progressão:** ao concluir esta missão e atingir 50 missões aprovadas, o personagem desbloqueia o título **Guardião da Vila**.

**A aventura continua nas Planícies da Dualidade.**