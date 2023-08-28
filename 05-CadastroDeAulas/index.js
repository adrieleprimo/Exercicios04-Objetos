const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [{
        identificador: 01,
        nomeDaAula: "Introdução à programação"
    },{
        identificador: 02,
        nomeDaAula: "Variáveis"
    },{
        identificador: 03,
        nomeDaAula: "Condicionais"
    }, {
        identificador: 04,
        nomeDaAula: "Arrays"
    }]};

for(item of curso.aulas){
    console.log(item)
}