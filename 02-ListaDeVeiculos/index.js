const carros = [{
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2022,
    cor: "Vermelho",
    quantidadePortas: 4,
    automatico: true
 }, {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2022,
    cor: "Branco",
    quantidadePortas: 4,
    automatico: false
 }, {
    marca: "Hyundai",
    modelo: "Tucson",
    ano: 2023,
    cor: "Cinza",
    quantidadePortas: 4,
    automatico: true
 }
]

for(let i = 0; i<carros.length; i++){
    console.log(carros[i])
}