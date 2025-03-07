 /*Exercicio jv
let string = "trabalho"
let upperString = string.toUpperCase();
console.log(upperString); 
 

let lowerString = string.toLocaleLowerCase();
console.log(lowerString);

let reversedString = string.split("").reverse().join("");
console.log(reversedString);


let numA = 15;
let numB= 5;

let soma = numA + numB
console.log("Soma:", soma);

let subtracao = numA - numB
console.log("Substração", subtracao);

let multiplicacao = numA * numB
console.log("Multiplicação", multiplicacao);

let divisao = numA / numB;
console.log("Divisão", divisao);

let maior = numA > numB;
console.log("O numero A é maior que o numero B", maior);



let idade = 70;

if (idade < 18) {
    console.log("menor de idade.");
} else if (idade >= 65){
console.log("idosa");
} else {
    console.log("maior de idade.");
}
    
   for ( let i = 1; i <= 100; i++) {
    console.log(i);
   }

function calcularValores(num) {
    return {
        dobro: num * 2,
        triplo: num * 3,
        quadrado: num ** 2 
    };
}

let resultado = calcularValores(5);

console.log("Dobro:", resultado.dobro);
console.log("Triplo:", resultado.triplo);
console.log("Quadrado:", resultado.quadrado);


let numeros = [10, 20, 30, 40, 50];

numeros.push(15);
console.log("Array com mais 15:", numeros);

numeros.shift();
console.log("Array tirando o primeiro número:", numeros);

let maior = Math.max(...numeros);
console.log("Maior número :", maior);

let menor = Math.min(...numeros);
console.log("Menor número :", menor);


let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];

let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(" maiúsculas:", frutasMaiusculas);

let frutasComA = frutas.filter(fruta => fruta.startsWith("A"));
console.log("Começam com 'A':", frutasComA);

let comprimentos = frutas.map(fruta => fruta.length);
console.log("Comprimento de cada string:", comprimentos);

let pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" };

pessoa.profissao = "Desenvolvedor";
console.log("Objeto após adicionar a propriedade 'profissao':", pessoa);

delete pessoa.cidade;
console.log("Objeto após remover a propriedade 'cidade':", pessoa);

let propriedades = Object.keys(pessoa);
console.log("Propriedades do objeto:", propriedades);


let livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };

let { titulo, autor } = livro;
console.log("Título:", titulo);
console.log("Autor:", autor);

function obterInformacoesLivro(livro) {
    return `Título: ${livro.titulo}, Autor: ${livro.autor}`;
}

let informacoes = obterInformacoesLivro(livro);
console.log(informacoes);
*/





