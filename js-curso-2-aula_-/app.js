let listaNumeros = [];
let numeroTrocar = 100
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function reiniciarTexto() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    let numeroTrocartexto = `Escolha um número entre 1 e ${numeroTrocar}`;
    exibirTextoNaTela('p', numeroTrocartexto);
}
reiniciarTexto()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'parabens');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `voce descbriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute ('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('h1', 'tente novamente');
            let numerochute1 = `o numero secreto e menor que ${chute}`
            exibirTextoNaTela ('p', numerochute1);
        } else {
            exibirTextoNaTela ('h1', 'tente nuvamente');
            let numerochute2 = `o numero secreto e maior que ${chute}`
            exibirTextoNaTela ('p', numerochute2);
        }
    } tentativas++
    limparcampo()
}
function limparcampo () {
    chute = document.querySelector ('input')
    chute.value = ''
}
function gerarNumeroAleatorio() { 
    let numeroEscolhido = parseInt(Math.random() * numeroTrocar + 1);
    let quantidadenumeros = listaNumeros.length;
    if (quantidadenumeros == numeroTrocar){
        listaNumeros = []
    }
    if(listaNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }

}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo ();
    tentativas = 1;
    reiniciarTexto()
    document.getElementById ("reiniciar").setAttribute ('disabled', true)
    
}