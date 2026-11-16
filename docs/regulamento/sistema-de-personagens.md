# Sistema de Personagens — Code Realms 300

## 1. Introdução

O Sistema de Personagens define as classes, características, atributos e identidade dos personagens do Code Realms 300.

Cada personagem representa uma linguagem de programação e possui características próprias, que determinam seu perfil, sua resistência e suas especializações durante a campanha.

O sistema foi desenvolvido para acompanhar o desenvolvimento individual de cada personagem ao longo dos 300 desafios.

As regras de experiência e penalidades são regulamentadas em documentos próprios:

- Sistema de XP: estabelece as regras de experiência e evolução de nível.
- Sistema de Penalidades: estabelece as consequências das falhas, perda de HP e recuperação dos personagens.

---

## 2. Classes e linguagens

O projeto possui três personagens jogáveis:

| Personagem | Linguagem | Perfil |
|---|---|---|
| Guerreiro | C | Robusto e resistente |
| Mago | Python | Frágil e estratégico |
| Arqueiro | JavaScript / Node.js | Equilibrado e versátil |

### 2.1 Guerreiro — C

O Guerreiro representa a linguagem C.

- HP inicial: 150
- Especialização principal: RES
- Especialização secundária: FOR

É o personagem com maior resistência inicial, representando um perfil robusto e consistente.

### 2.2 Mago — Python

O Mago representa a linguagem Python.

- HP inicial: 90
- Especialização principal: INT
- Especialização secundária: TEC

É o personagem com menor resistência inicial, mas possui especialização em inteligência e técnica.

### 2.3 Arqueiro — JavaScript / Node.js

O Arqueiro representa JavaScript e Node.js.

- HP inicial: 120
- Especialização principal: TEC
- Especialização secundária: FOR

É um personagem equilibrado, com foco em técnica e capacidade de implementação.

---

## 3. Pontos de vida (HP)

O HP representa a resistência do personagem durante a campanha.

Cada classe possui uma quantidade inicial diferente de HP:

| Classe | HP inicial |
|---|---:|
| Guerreiro | 150 |
| Mago | 90 |
| Arqueiro | 120 |

### 3.1 Evolução do HP

A cada nível conquistado, o HP máximo aumenta em 20% do HP inicial da respectiva classe.

O aumento é fixo por nível, não acumulativo.

| Classe | Aumento por nível |
|---|---:|
| Guerreiro | +30 HP |
| Mago | +18 HP |
| Arqueiro | +24 HP |

**Fórmula:**

HP máximo = HP inicial × [1 + 0,2 × (nível - 1)]

A progressão de nível e a aplicação dos benefícios correspondentes são regulamentadas no Sistema de XP.

### 3.2 Estado do HP

O HP atual representa a quantidade de resistência disponível para o personagem.

Seu valor não poderá ultrapassar o HP máximo definido para o nível atual.

As regras de perda de HP, incapacitação e recuperação são regulamentadas no Sistema de Penalidades.

---

## 4. Atributos

Os atributos representam o desenvolvimento das capacidades individuais do personagem durante a campanha.

O sistema possui quatro atributos:

| Sigla | Atributo | Representação |
|---|---|---|
| INT | Inteligência | Interpretação, raciocínio lógico e compreensão de problemas |
| FOR | Força | Autonomia e capacidade de implementar soluções |
| RES | Resistência | Persistência, depuração e superação de dificuldades |
| TEC | Técnica | Organização, qualidade do código e boas práticas |

Cada atributo possui uma escala de 1 a 10, sendo 10 o valor máximo permitido.

### 4.1 Atributos iniciais

Todos os personagens começam com seus atributos definidos como `null`.

Antes do início das missões oficiais, cada personagem deverá realizar um diagnóstico prático composto por 10 questões.

O diagnóstico será aplicado individualmente:

- Guerreiro: 10 questões em C.
- Mago: 10 questões em Python.
- Arqueiro: 10 questões em JavaScript.

Os três testes terão os mesmos objetivos e níveis de dificuldade, adaptados às particularidades de cada linguagem.

O resultado determinará a distribuição inicial de 20 pontos entre os quatro atributos de cada personagem.

A distribuição deverá respeitar o limite máximo de 10 pontos por atributo.

### 4.2 Evolução dos atributos

A cada missão concluída e aprovada, o personagem receberá exatamente 5 pontos de atributos.

A distribuição será definida de acordo com o desempenho apresentado durante a missão.

Os pontos poderão ser distribuídos entre um ou mais atributos, respeitando o limite máximo de 10 em cada um.

Não será obrigatório distribuir pontos em todos os atributos.

Os pontos recebidos não poderão ultrapassar o limite máximo de cada atributo.

### 4.3 Critérios de avaliação

A distribuição dos pontos considerará os seguintes critérios:

- **Interpretação:** capacidade de compreender o enunciado e identificar o problema.
- **Autonomia:** capacidade de desenvolver a solução sem depender constantemente de ajuda.
- **Persistência:** disposição para continuar tentando diante das dificuldades.
- **Depuração:** capacidade de identificar, compreender e corrigir erros.
- **Organização:** estrutura e clareza da implementação.
- **Boas práticas:** qualidade e adequação do código.

A pontuação será individual para cada personagem, considerando seu próprio desempenho na respectiva linguagem.

---

## 5. Missões concluídas

Cada personagem terá um contador numérico de missões concluídas.

Esse contador será atualizado sempre que o personagem concluir e for aprovado em uma missão oficial.

O contador será utilizado para acompanhar a progressão individual da campanha e controlar o desbloqueio de títulos.

Missões não concluídas ou reprovadas não serão contabilizadas como missões concluídas.

---

## 6. Sistema de títulos

Os títulos representam conquistas e marcos importantes durante a campanha.

### 6.1 Desbloqueio

Um novo título será desbloqueado a cada 10 missões concluídas.

| Missões concluídas | Título |
|---|---|
| 10 | A definir |
| 20 | A definir |
| 30 | A definir |
| 40 | A definir |
| 50 | A definir |

A progressão continuará seguindo essa regra até o final da campanha.

Os nomes e as características dos títulos serão definidos posteriormente.

### 6.2 Coleção de títulos

Cada personagem possuirá sua própria coleção de títulos desbloqueados.

Os títulos conquistados serão permanentes e não poderão ser perdidos.

### 6.3 Título ativo

O personagem poderá selecionar um dos títulos que já desbloqueou para exibi-lo como título ativo.

Regras:

- O título ativo começa como `null`.
- Só poderá ser selecionado um título presente na coleção de títulos desbloqueados.
- O personagem poderá trocar seu título ativo quando desejar.
- Também poderá ficar sem título ativo, mesmo possuindo títulos desbloqueados.

---

## 7. Status do personagem

Cada personagem terá um campo de status para identificar sua condição atual.

| Status | Descrição |
|---|---|
| ativo | Personagem apto a continuar a campanha |
| incapacitado | Personagem com HP igual a zero, aguardando a missão de recuperação |

As condições para alteração do status e o procedimento de retorno à campanha são definidos no Sistema de Penalidades.

---

## 8. Estrutura dos dados

As informações dos personagens serão armazenadas individualmente em arquivos JSON dentro de `data/personagens/`.

Cada personagem terá seu próprio arquivo:

- `guerreiro-c.json`
- `mago-python.json`
- `arqueiro-javascript.json`

### 8.1 Exemplo de ficha JSON

Exemplo inicial do Guerreiro:

```json
{
  "id": "guerreiro-c",
  "nome": "Guerreiro",
  "classe": "Guerreiro",
  "linguagem": "C",
  "nivel": 1,
  "xp": 0,
  "hp_atual": 150,
  "hp_maximo": 150,
  "atributos": {
    "int": null,
    "for": null,
    "res": null,
    "tec": null
  },
  "missoes_concluidas": 0,
  "titulos_desbloqueados": [],
  "titulo_ativo": null,
  "status": "ativo"
}
```

Os arquivos do Mago e do Arqueiro seguirão a mesma estrutura, alterando apenas os dados específicos de cada classe.

### 8.2 Descrição dos campos

| Campo | Função |
|---|---|
| id | Identificador único do personagem |
| nome | Nome do personagem |
| classe | Classe correspondente |
| linguagem | Linguagem de programação representada |
| nivel | Nível atual |
| xp | Experiência acumulada |
| hp_atual | Quantidade atual de HP |
| hp_maximo | Limite máximo de HP |
| atributos | Pontuação dos quatro atributos |
| missoes_concluidas | Contador de missões aprovadas |
| titulos_desbloqueados | Array com os títulos conquistados |
| titulo_ativo | Título atualmente selecionado ou `null` |
| status | Condição atual do personagem |

Os campos `nivel` e `xp` são mantidos na ficha para registrar a progressão individual, conforme as regras do Sistema de XP.

---

## 9. Regras gerais

1. O projeto possui três personagens, cada um representando uma linguagem de programação.
2. Cada personagem possui HP inicial e crescimento próprios.
3. Todos os personagens começam no nível 1.
4. Os atributos começam como `null` e serão definidos após o diagnóstico inicial.
5. Cada personagem deverá realizar um diagnóstico individual de 10 questões.
6. O diagnóstico determinará a distribuição inicial de 20 pontos entre os atributos.
7. Cada missão aprovada concede exatamente 5 pontos de atributos.
8. Nenhum atributo poderá ultrapassar o limite de 10.
9. A distribuição dos pontos será baseada no desempenho individual.
10. Cada personagem possui seu próprio contador de missões concluídas.
11. A cada 10 missões concluídas, um novo título será desbloqueado.
12. Os títulos desbloqueados são permanentes e individuais.
13. O título ativo só poderá ser escolhido entre os títulos já desbloqueados.
14. As regras de XP e penalidades deverão seguir seus respectivos regulamentos.

---