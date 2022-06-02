class pessoa{
    olhos: number = 0;
    boca: number = 0
    nome: string = "";
    sobrenome: string = "";

    constructor(olhos,boca, nome, sobrenome){
        olhos = this.olhos;
        boca = this.boca;
        nome = this.nome;
        sobrenome = this.sobrenome;
    }
}

class juridica extends pessoa{
    Flavio = new pessoa(2,1,"Flavio", "Leonardo");
}   