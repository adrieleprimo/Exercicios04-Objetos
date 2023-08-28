const pessoas = [{
    nome: "João",
    pets: [],
},{
    nome: "Ana",
    pets: ["Pingu", "Lulu"],
},{
    nome: "Beatriz",
    pets: ["Lessie"],
},{
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
},{
    nome: "Antonio",
    pets: ["Naninha"],
},];

for(let i = 0; i<pessoas.length;i++){
    if(pessoas[i].pets.length >= 2){
        console.log(`Sou ${pessoas[i].nome} e eu tenho ${pessoas[i].pets.length} pets`);
    } else if (pessoas[i].pets.length === 1) {
        console.log(`Sou ${pessoas[i].nome} e  eu tenho ${pessoas[i].pets.length} pet`);
    } else {
        console.log(`Sou ${pessoas[i].nome} e  eu não tenho pets`) 
    }
}