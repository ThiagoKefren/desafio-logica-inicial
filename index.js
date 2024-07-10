// DESAFIO CLASSIFICADOR DE NÍVEL DE HEROI
//
//Utilizar:
//Variaveis, Operadores, Laços de Repetição e Estruturas de decisões
//
//Objetivo: 
// - Criar uma variável para armazenar o nome e a quantidade de XP de um herói
// - Utilizar uma estrutura de decisão para apresentar alguma das mensagens listadas

let nomeHeroi = "Link Zelda"
let expHeroi = 6841

console.log(expHeroi + " pontos.")

if (expHeroi <= 1000) {
    expHeroi = "Ferro"
} else if (expHeroi > 1001 && expHeroi <= 2000) {
    expHeroi = "Bronze"
} else if (expHeroi > 2001 && expHeroi <= 6000) {
    expHeroi = "Prata"
} else if (expHeroi > 6001 && expHeroi <= 7000) {
    expHeroi = "Ouro"
} else if (expHeroi > 7001 && expHeroi <= 8000) {
    expHeroi = "Platina"
} else if (expHeroi > 8001 && expHeroi <= 9000) {
    expHeroi = "Ascendente"
} else if (expHeroi > 9001 && expHeroi <= 10000) {
    expHeroi = "Imortal"
} else if (expHeroi >= 10001) {
    expHeroi = "Radiante"
}



//Mensagem de saída
console.log("O herói " + nomeHeroi + " está no nível " + expHeroi + ".")