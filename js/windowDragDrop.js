// faz as janelas serem arrastaveis com limite baseado na pagina
$("#window").draggable({
  handle: "#captDrag",
  containment: '#windowBounds',
  drag: drag
});
$("#windowAdvice").draggable({
  handle: "#captDrag",
  containment: '#windowBounds',
  drag: drag
});
$("#windowChanges").draggable({
  handle: "#captDrag",
  containment: '#windowBounds',
  drag: drag
});
$("#windowFriends").draggable({
  handle: "#captDrag",
  containment: '#windowBounds',
  drag: drag
});

// Resolvendo bug onde a janela clipa pra fora do body
function drag(e, ui) {
  if (ui.position.left < 170) {
    ui.position.left = 170;
  }
}
