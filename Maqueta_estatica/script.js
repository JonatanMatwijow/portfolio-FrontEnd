//btn volver al inicio
/*Estas lineas serian del boton para volver al inicio, reveer si va a estar o no*/

/*document.getElementById("btn_scroll").addEventListener("click", scrollUp);


function scrollUp(){
  let currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0){
    window.requestAnimationFrame(scrollUp);
    windows.scrollTo(0, currentScroll - (currentScroll / 10));
    btnUp.style.transform = "scale(0)";
    
  }
}

btnUp = document.getElementById("btn_scroll");

window.onscroll = function(){
  let scroll = document.documentElement.scrollTop;

  if (scroll > 5000){
    btnUp.style.transform = "scale(1)"
    }
    else if (scroll < 500){
     btnUp.style.transform = "scale(0)";
    }
}*/

//Lineas del modal de los certificados

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})