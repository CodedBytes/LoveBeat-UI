// Responsavel por controlar estilo / funcionalidade das abas
function openTab(evt, tabNames) {
    var i, tabcontent, tabobj;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";// Seta tipo do display pra none se nao selecionado
    }
    tabobj = document.getElementsByClassName("tabObj");
    for (i = 0; i < tabobj.length; i++) {
      tabobj[i].className = tabobj[i].className.replace(" active", "");// Seta active para o botao pressionado
    }
    document.getElementById(tabNames).style.display = "block";// define o tipo do display.
    evt.currentTarget.className += " active";// Nome da classe responsavel pelo active.
  }