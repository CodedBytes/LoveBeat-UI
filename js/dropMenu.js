/* Função que ativa o menu */
function menu() {
  document.getElementById("dropdown").classList.toggle("show");
  if(document.getElementById("dropdown").classList.contains("show"))
  {
    var sfx = new Audio("./audios/diagOpen.wav");
    sfx.play();
  }else{
    var sfx = new Audio("./audios/diagClose.wav");
    sfx.play();
  }
}

function channelMenu() {
  document.getElementById("ChannelDropdown").classList.toggle("showChannels");
  if(document.getElementById("ChannelDropdown").classList.contains("showChannels"))
  {
    var sfx = new Audio("./audios/diagOpen.wav");
    sfx.play();
  }else{
    var sfx = new Audio("./audios/diagClose.wav");
    sfx.play();
  }
}

function InfoWindow() {
  document.getElementById("window").classList.toggle("showWindow");
  if(document.getElementById("window").classList.contains("showWindow"))
  {
    var sfx = new Audio("./audios/diagOpen.wav");
    sfx.play();
  }else{
    var sfx = new Audio("./audios/diagClose.wav");
    sfx.play();
  }
}

// Fecha Dropdown se clicar fora dele
window.onclick = function(event) {

  // Aba de mais funções
  if (!event.target.matches('#dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        var sfx = new Audio("./audios/diagClose.wav");
        sfx.play();
      }
    }
  }

  // Aba de canais
  if (!event.target.matches('#btn') && !event.target.matches('#channel')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-channels");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showChannels')) {
        openDropdown.classList.remove('showChannels');
        var sfx = new Audio("./audios/diagClose.wav");
        sfx.play();
      }
    }
  }

  //Janela de informação
  if (!event.target.matches('#wInfo')) {
    var dropdowns = document.getElementsByClassName("info-Window");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showWindow') && event.target.matches('#close')) {
        openDropdown.classList.remove('showWindow');
        var sfx = new Audio("./audios/diagClose.wav");
        sfx.play();
      }
    }
  }
}