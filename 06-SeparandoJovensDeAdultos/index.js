const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

let jovens = [{}]
let adultos = [{}]

for(let i =0; i<usuarios.length;i++){
    if(usuarios[i].idade >= 18){
        adultos.push("Nome: ", usuarios[i].nome, "Idade: ", usuarios[i].idade, "\n")
    } else{
        jovens.push("Nome: ", usuarios[i].nome, "Idade: ", usuarios[i].idade, "\n")
    }
}

console.log("Adultos: \n", adultos)
console.log("Jovens:\n ",jovens)