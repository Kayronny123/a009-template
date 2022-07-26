
// const nome =  prompt(" qual seu nome");

// const cor = prompt(" qual seu sua cor favorita");
// concatenação
// let mensagem1 = "a cor favorita de " + nome + " é " + cor
//console.log(mensagem1)
// template string
// let mensagem2 = (`a cor favorita de ${nome} é ${cor}`);
//console.log(mensagem2);

// const citacao = prompt(" qual sua citação favorita ");

// mensagem1 = `${mensagem1}, é a citação favorita é "${citacao}"`;

//console.log(mensagem1);

// const citacao2 = prompt(" qual sua citação favorita ");

// mensagem2 = `nome: ${nome} cor favorita ${cor}`;

//console.log(mensagem2);

// console.log(`o nome ${nome.toUpperCase()} possui ${nome.length} caracteres`);
// console.log(`o nome possui a letra A: ${nome.includes("a")}`);

const nome = prompt(" qual seu nome? ");

let newName = nome.replaceAll("r","l");

const emailDeUsuario = prompt(" Insira seu email ");

console.log(` O email  ${emailDeUsuario} foi cadastrado com sucesso, seja bem vindo ${nome}`);

console.log(`o nome de possui ${nome.length} caracteres `);

console.log(" seu nome foi alterado para ", newName);

console.log(` O email de rogério possui @ ${emailDeUsuario.includes("@")}`);

let test = ("rogerio \nkayronny");
console.log(test);
