// faz as janelas serem arrastaveis com limite baseado no body
$("#window").draggable({
  handle: "#captDrag",
  containment: '#windowBounds',
  drag: drag
});

$("#close").click(function () {
  // Reseta posição
  $("#window").removeAttr('style');

});

function drag(e, ui) {
  if (ui.position.left < 170) {
    ui.position.left = 170;
  }
}