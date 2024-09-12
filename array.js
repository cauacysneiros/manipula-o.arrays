let notas = [6.5, 8.0, 7.5, 9.0, 5.5];

console.log('Primeira nota:', notas[0]);
console.log('Última nota:', notas[notas.length - 1]);

notas.push(10.0);
console.log('Notas após adicionar uma nova nota:', notas);

notas.shift();
console.log('Notas após remover a primeira nota:', notas);

notas.forEach(nota => {
    console.log('Nota:', nota);
});

let soma = notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / notas.length;
console.log('Média das notas:', media);

let notasMaioresQue7 = notas.filter(nota => nota > 7);
console.log('Notas maiores que 7:', notasMaioresQue7);

notas.sort((a, b) => a - b);
console.log('Notas ordenadas em ordem crescente:', notas);

let temNota65 = notas.includes(6.5);
console.log('Nota 6.5 está presente?', temNota65);

let indiceNota80 = notas.indexOf(8.0);
console.log('Índice da nota 8.0:', indiceNota80);

let notasQuadradas = notas.map(nota => nota ** 2);
console.log('Notas elevadas ao quadrado:', notasQuadradas);
