let playerWins = 70
let playerLosses = 30

console.log(`O Herói tem de saldo de ${playerResult(playerWins,playerLosses)} está no nível de ${playerRank(playerWins)}`);

function playerResult(wins, losses) {
    return wins-losses;
}

function playerRank(wins) {
    if (wins <= 10) return 'Ferro';
    if (wins <= 20) return 'Bronze';
    if (wins <= 50) return 'Prata';
    if (wins <= 80) return 'Ouro';
    if (wins <= 90) return 'Diamante';
    if (wins <= 100) return 'Lendário';
    return 'Imortal';
}

/*
## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/