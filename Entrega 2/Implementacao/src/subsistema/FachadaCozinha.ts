class FachadaCozinha {

    static buscarIngredientes(alimento: string){
        return JSON.stringify([
            {
                descricao: "Frango",
                quantidade: "1/2 frango (334 g)",
                calorias: "731kcal"
            },
            {
                descricao: "Frango assado",
                quantidade: "1 peito (172 g)",
                calorias: "282 kcal"
            },
            {
                descricao: "Pão de queijo",
                quantidade: "1 pão (50 g)",
                calorias: "72 kcal"
            },
            {
                descricao: "Pizza de espinafre e queijo",
                quantidade: "1 fatia (62 g)",
                calorias: "150 kcal"
            },
            {
                descricao: "Torta de maçã",
                quantidade: "1 fatia (125 g)",
                calorias: "296 kcal"
            }
        ])
    }

}

module.exports = FachadaCozinha;