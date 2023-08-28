const usuario = [{
    nome: "João",
    idade: 25,
    maiorDeIdade: false
}, {
    nome: "Ana",
    idade:18,
    maiorDeIdade: false
}, {
    nome: "Beatriz",
    idade: 15,
    maiorDeIdade: false
}, {
    nome: "Carlos",
    idade: 16,
    maiorDeIdade: false
}, {
    nome: "Antonio",
    idade: 32,
    maiorDeIdade: false
}];

for(let i =0; i<usuario.length;i++){
    if(usuario[i].idade>= 18){
        usuario[i].maiorDeIdade = true   
    }
}
for(item of usuario){
    console.log(item)
}

