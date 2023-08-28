const livro = {
    nome: "O poder do habito",
    capitulos: [{
        numero : 1,
        nome: "O loop do hábito"
    }, {
        numero: 2,
        nome: "O cérebro ansioso"
    },{
        numero:3,
        nome: "A regra de ouro da mudança de hábito"
    },{
        numero: 4,
        nome: "Hábitos angulares, ou a balada de Paul O'neill"
    },{
        numero: 5,
        nome: "Starbucks e o hábito do sucesso"
    },{
        numero: 6,
        nome: "O poder de uma crise"
    },{
        numero: 7,
        nome: "Como a target sabe o que você quer antes que você saiba"
    },{
        numero: 8,
        nome: " A Saddleback Church e o boicote aos ônmibus de Montgomery"
    },{
        numero: 9,
        nome: "A neorologia do livre-arbítrio"
    }]
};

for(item of livro.capitulos){
    console.log(item)
}