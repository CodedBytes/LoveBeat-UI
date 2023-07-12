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

// Canais 
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

// Janela Info
function windowInfo() {
  document.getElementById("window").classList.toggle("showWindow");
  if(document.getElementById("window").classList.contains("showWindow"))
  {
    var sfx = new Audio("./audios/diagOpen.wav");
    sfx.play();
  }else{
    var sfx = new Audio("./audios/diagClose.wav");
    sfx.play();
  }windowAdvice
}

// Janela Advice
function windowAdvice() {
  document.getElementById("windowAdvice").classList.toggle("showAdv");
  if(document.getElementById("windowAdvice").classList.contains("showAdv"))
  {
    var sfx = new Audio("./audios/diagOpen.wav");
    sfx.play();
  }else{
    var sfx = new Audio("./audios/diagClose.wav");
    sfx.play();
  }
}

// Janela changes
function windowChange() {
  document.getElementById("windowChanges").classList.toggle("showChanges");
  if(document.getElementById("windowChanges").classList.contains("showChanges"))
  {
    var sfx = new Audio("./audios/diagOpen.wav");
    sfx.play();
  }else{
    var sfx = new Audio("./audios/diagClose.wav");
    sfx.play();
  }
}

// Janela friends
function windowFriend() {
  document.getElementById("windowFriends").classList.toggle("showFriends");
  if(document.getElementById("windowFriends").classList.contains("showFriends"))
  {
    var sfx = new Audio("./audios/diagOpen.wav");
    sfx.play();
  }else{
    var sfx = new Audio("./audios/diagClose.wav");
    sfx.play();
  }
}

// Janela friends
function windowMail() {
  document.getElementById("windowMail").classList.toggle("showMail");
  if(document.getElementById("windowMail").classList.contains("showMail"))
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

  //Janela de Mail
  if (!event.target.matches('#btnMail')) {
    var dropdowns = document.getElementsByClassName("mail-Window");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showMail') && event.target.matches('#closeMail')) {
        openDropdown.classList.remove('showMail');
        var sfx = new Audio("./audios/diagClose.wav");
        $("#windowMail").removeAttr('style');
        sfx.play();
      }else{}
    }
  }

  //Janela de informação
  if (!event.target.matches('#windowInf')) {
    var dropdowns = document.getElementsByClassName("info-Window");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showWindow') && event.target.matches('#closeInfo')) {
        openDropdown.classList.remove('showWindow');
        var sfx = new Audio("./audios/diagClose.wav");
        $("#window").removeAttr('style');
        sfx.play();
      }else{}
    }
  }

  //Janela de noticias
  if (!event.target.matches('#windowAdv')) {
    var dropdowns = document.getElementsByClassName("advice-Window");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showAdv') && event.target.matches('#closeAdv')) {
        openDropdown.classList.remove('showAdv');
        var sfx = new Audio("./audios/diagClose.wav");
        $("#windowAdvice").removeAttr('style');
        sfx.play();
      }else{}
    }
  }

  //Janela de mudanças
  if (!event.target.matches('#windowCnges')) {
    var dropdowns = document.getElementsByClassName("changes-Window");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showChanges') && event.target.matches('#closeChanges')) {
        openDropdown.classList.remove('showChanges');
        var sfx = new Audio("./audios/diagClose.wav");
        $("#windowChanges").removeAttr('style');
        sfx.play();
      }else{}
    }
  }

  //Janela de amigos
  if (!event.target.matches('#btnFriends')) {
    var dropdowns = document.getElementsByClassName("friends-Window");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showFriends') && event.target.matches('#closeFriends')) {
        openDropdown.classList.remove('showFriends');
        var sfx = new Audio("./audios/diagClose.wav");
        $("#windowFriends").removeAttr('style');
        sfx.play();
      }else{}
    }
  }
}