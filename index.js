var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');

mudarJogador('x');

function quadradoClick(id){

  var quadrado = document.getElementById(id);
  if(quadrado.innerHTML !== '-'){
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = '#fc2d11';

  if(jogador === 'x') {
    jogador = 'o';
  }else {
    jogador = 'x';
  }

  mudarJogador(jogador);

}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
  
}