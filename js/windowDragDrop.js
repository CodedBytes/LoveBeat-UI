// faz as janelas serem arrastaveis com limite baseado no conteudo da pagina
$("#window").draggable({
  handle: "#captDrag",
  containment: '#windowBounds',
  drag: drag
});

$("#close").click(function () {
  // Reseta posição
  $("#window").removeAttr('style');
});

// Corrigindo bug do containment,
// Sem colisão com lado esquerdo.
function drag(e, ui) {
  if (ui.position.left < 170) {
    ui.position.left = 170;
  }
}
