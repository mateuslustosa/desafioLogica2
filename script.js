//Crie uma condiçao que exiba uma mensagem no console se a idade for maior que 18
 let age = 18

 if(age >= 18){
   console.log("Maior de idade");
 }else{
   console.log("Menor de idade");
}

//Crie uma condição que exiba uma mensagem no console se você for maior de idade e a condição humana seja true.
let human = true;

if((age >= 18) && (human === true)){
   console.log("Você é humano");
 }else{
   console.log("Você é um E.T");
}

//3- Criar uma condição que exiba uma mensagem no console se você fizer aniversario em Janeiro OU Dezembro
 let month = "Setembro";

 if(month === "Janeiro" || month === "Dezembro"){
   console.log("Feliz Aniversário");
 }else{
   console.log("Não é seu aniversário!");
}