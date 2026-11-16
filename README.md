# ⚔️ Code Realms 300

### Três linguagens. Três aventureiros. Uma jornada de evolução.

Code Realms 300 é um projeto de aprendizagem prática de programação estruturado como uma campanha de RPG.

O projeto reúne **300 desafios de programação**, distribuídos em diferentes regiões, com progressão por experiência, classes, personagens, conquistas, penalidades e chefes de região.

O objetivo é desenvolver raciocínio lógico, autonomia na resolução de problemas e domínio progressivo de diferentes linguagens de programação.

Mais do que resolver exercícios, a proposta é aprender a construir soluções para problemas que poderiam existir em sistemas reais.

---

## 🗺️ Sobre a campanha

A jornada é composta por seis regiões, cada uma dedicada ao desenvolvimento de determinados conhecimentos de programação.

Cada região possui 50 desafios, organizados em seis etapas:

| Etapa | Desafios | Objetivo |
|---|---:|---|
| Aprendizagem e reconhecimento | 001–010 | Compreender os fundamentos |
| Aplicação prática | 011–020 | Aplicar os conceitos |
| Combinação de conceitos | 021–030 | Integrar diferentes conhecimentos |
| Problemas contextualizados | 031–040 | Resolver situações reais |
| Desafios avançados | 041–049 | Desenvolver autonomia |
| Chefe da região | 050 | Consolidar o aprendizado |

**Total: 300 desafios.**

Cada desafio será implementado em três linguagens, proporcionando diferentes perspectivas sobre o mesmo problema.

---

## 🛡️ Os três aventureiros

Cada linguagem possui um personagem próprio, com classe, características e progressão independentes.

| Personagem | Classe | Linguagem | HP inicial |
|---|---|---|---:|
| Guerreiro | Guerreiro | C | 150 |
| Mago | Mago | Python | 90 |
| Arqueiro | Arqueiro | JavaScript / Node.js | 120 |

### Guerreiro — C

Representa resistência, disciplina e controle.

A linguagem C exige atenção à estrutura, aos tipos de dados e ao gerenciamento de recursos.

### Mago — Python

Representa inteligência, conhecimento e versatilidade.

Python oferece uma sintaxe expressiva e permite desenvolver soluções de maneira objetiva.

### Arqueiro — JavaScript / Node.js

Representa agilidade, técnica e flexibilidade.

JavaScript permite trabalhar com aplicações modernas, lógica de programação e desenvolvimento back-end com Node.js.

### Progressão independente

Cada personagem possui sua própria:

- Experiência (XP).
- Evolução de nível.
- Barra de vida (HP).
- Atributos.
- Inventário.
- Moedas.
- Histórico de missões.
- Conquistas.

O progresso de uma linguagem não é transferido para outra.

---

## ⭐ Sistema de experiência

As missões concedem XP individualmente a cada personagem.

A experiência é conquistada mediante aprovação na avaliação da implementação.

A evolução contempla:

- Conclusão de missões.
- Derrota de chefes.
- Conquista de regiões.
- Desafios especiais.
- Atividades relacionadas ao Git e à qualidade do código.

O XP conquistado não é perdido em caso de morte do personagem.

---

## ❤️ Sistema de sobrevivência

Cada classe possui uma quantidade inicial de HP.

As falhas nas missões provocam penalidades de acordo com a dificuldade do desafio.

Quando o HP chega a zero, o personagem fica incapacitado.

A recuperação poderá acontecer por meio de:

- Missões especiais de recuperação.
- Tratamento na hospedaria mediante pagamento de moedas.

A campanha possui consequências, mas o progresso de aprendizagem conquistado permanece preservado.

---

## 🌿 Regiões da campanha

| Região | Nome | Situação |
|---|---|---|
| 01 | Vila dos Iniciantes | Em preparação |
| 02 | A definir | Planejada |
| 03 | A definir | Planejada |
| 04 | A definir | Planejada |
| 05 | A definir | Planejada |
| 06 | A definir | Planejada |

Cada região apresentará novos conceitos, desafios progressivos e um chefe final.

---

## 🌳 Organização do Git

O projeto utiliza branches independentes para cada implementação.

| Branch | Responsabilidade |
|---|---|
| `main` | Documentação, regulamentos, desafios e fichas oficiais |
| `javascript-node` | Implementações em JavaScript / Node.js |
| `c` | Implementações em C |
| `python` | Implementações em Python |

A branch `main` representa a referência oficial do projeto.

As soluções permanecem em suas respectivas branches, sem privilegiar uma linguagem.

O desenvolvimento utiliza:

- Commits organizados.
- Histórico de alterações.
- Branches independentes.
- Revisão de soluções.
- Tags para marcar regiões concluídas.

---

## 📁 Estrutura do projeto

```text
code-realms-300/
│
├── README.md
├── .gitignore
│
├── data/
│   └── personagens/
│       ├── guerreiro-c.json
│       ├── mago-python.json
│       └── arqueiro-javascript.json
│
├── docs/
│   ├── regulamento/
│   │   ├── sistema-de-personagens.md
│   │   ├── sistema-de-xp.md
│   │   └── sistema-de-penalidades.md
│   │
│   ├── regioes/
│   │   └── regiao-01
│   │       ├── livro-de-missoes.md
│   │       └── README.md
│   │
│   └── fichas/
│       ├── guerreiro-c.md
│       ├── mago-python.md
│       └── arqueiro-javascript.md
│
├── src/
│   └── regiao-01/
│
├── tests/
│   └── regiao-01/
│
└── jogos-finais/
```

A documentação oficial, os dados dos personagens e os enunciados ficam centralizados na `main`.

As implementações de cada linguagem ficam em suas respectivas branches.

---

## 🏆 Objetivos finais

Ao concluir a campanha, o aventureiro deverá ter desenvolvido:

- Raciocínio lógico e resolução de problemas.
- Domínio de estruturas condicionais.
- Manipulação de arrays e objetos.
- Funções e modularização.
- Estruturas de dados.
- Organização e persistência de informações.
- Práticas de Git e GitHub.
- Capacidade de desenvolver aplicações.

### Os cinco jogos finais

Após os 300 desafios, serão propostos cinco projetos especiais para consolidar os conhecimentos adquiridos.

Os jogos serão desenvolvidos de maneira independente, utilizando os conhecimentos acumulados durante a campanha.

---

## 📜 Filosofia do projeto

> O conhecimento não é conquistado apenas pela vitória, mas também pela capacidade de aprender com cada derrota.

Code Realms 300 não é uma corrida para completar exercícios.

É uma jornada de construção de conhecimento, disciplina e autonomia.

**Que a aventura comece!**

⚔️ Um jogador. Três aventureiros. Trezentas missões. Uma grande jornada.