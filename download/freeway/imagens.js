let imagemDaEstrada;
let imagemDoAtor;
let imagemCarros;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha
let somColisao
let somDoPonto

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/ator-1.png") 
  imagemCarro = loadImage("Imagens/carro-1.png")
  imagemCarro2 = loadImage("Imagens/carro-2.png")
  imagemCarro3 = loadImage("Imagens/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]

  somDaTrilha = loadSound("sons/trilha.mp3")
  somColisao = loadSound("sons/colidiu.mp3")
  somDoPonto = loadSound("sons/pontos.wav")
}
