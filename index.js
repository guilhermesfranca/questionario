import entradaDados from "readline-sync";

let correto = "";

while (correto !== "sim") {
    let nome = entradaDados.question('Digite seu nome: ');
    let sobrenome = entradaDados.question('Qual seu sobrenome: ');

    console.log("Olá, " + nome + " " + sobrenome);

    let anos = entradaDados.questionInt('Quantos anos você tem?');

    console.log(anos + ", entendi.");
    console.log("Seu nome é " + nome + " " + sobrenome + " e você tem " + anos + " anos.");

    correto = entradaDados.question('Está correto? (sim/não) ');

    if (correto === "sim") {
        console.log("Programa Finalizado");
    } else {
        console.log("Vamos tentar novamente.");
    }
}
