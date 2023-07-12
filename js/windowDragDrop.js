// faz as janelas serem arrastaveis com limite baseado no body
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
$("#windowMail").draggable({
  handle: "#captDrag",
  containment: '#windowBounds',
  drag: drag
});


function drag(e, ui) {
  if (ui.position.left < 170) {
    ui.position.left = 170;
  }
}