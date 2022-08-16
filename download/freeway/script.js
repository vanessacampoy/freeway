function setup() {
  createCanvas(400, 400);
  somDaTrilha.loop()
}

function draw() {
  background(ImagemDaEstrada);
  mostraAtor();
  mostracarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
