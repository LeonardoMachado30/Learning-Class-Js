//---------factory function-------------
//camelCase - umDoisTresQuatro
function criarCeuluar(marcaCelular,tamanhoTela){
   return {
        marcaCelular,
        tamanhoTela,
        ligar() {
            console.log("FAzendo ligação...");
        }
    }
}

// console.log(criarCeuluar("Nokia", "12"));
// console.log(criarCeuluar("Samsung", 15));

//-----Constructor--------
//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.ligar = function(){
        console.log("FAZENDO LIGAÇÂO...");
    }
}
//instanciando
const celular = new Celular('LG', 5);

// console.log(celular);

function computador(memoriaRam, CPU, HDD, SSD){
    return {
        memoriaRam,
        CPU,
        HDD,
        SSD,
        processar(){
            return console.log(this.memoriaRam * this.CPU);
        }
    }
};

// console.log(computador(12,2.5,1000,250))

//------Natureza dinamica de objetos------
const mouse = {
    cor: 'red',
    marcar: 'dazz'
}
mouse.velocidade = 5000;
delete mouse.cor;
// console.log(mouse);

//--------Clonando Objetos--------

const novoObjeto = Object.assign({
    bateria: 5000
}, celular);

// console.log(novoObjeto);

const objeto2 = {...celular};
objeto2.aceleracao = 2;

// console.log(objeto2);

//----------Math----------------

// Math.Random()

/*
 *COMO VERIFICAR SE ESTA NA HOME
 *  const mensagem2 = '/';
 *  if(mensagem2.startsWith('/') && mensagem2.endsWith('/')){
 *      console.log("true");
 *  }else{
 *      console.log("false")
 *  }
*/

//Template Literal

const mensagem = 'Oi isso e a minha\n primeira mensagem'

//atividade 1
let endereco = {
    rua: 'a',
    cidade: 'x',
    cep: 'c'
}

function exibirEnderco(endereco){
    for(let chave in endereco){
        console.log(chave, endereco[chave])
    }
}

exibirEnderco(endereco);

//atividade 2

let postagem = {
    titulo: 'Computacao',
    mensagem: 'Computacao e uma area em crescimento',
    autor: 'flavio',
    vizualizacao: 10,
    comentarios: [
        {autor: 'a', mensagem: 'Ola'},
        {autor: 'b', mensagem: 'Tudo bem'}
    ],
    estaAoVivo: true
}

console.log(postagem)

