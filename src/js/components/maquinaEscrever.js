// efeito de maquina de escrever
export default window.onload = function () {
  var txtTitulo = "Olá, me chamo Guilherme";
  var txt1 = document.getElementById("maquina");

  var speed = 150;
  var cont = 0;

  function typeWriter() {
    if (cont < txtTitulo.length) {
      txt1.innerHTML += "" + txtTitulo.charAt(cont) + "";
      cont++;
      setTimeout(typeWriter, speed);
    } else {
      cont = 0;
    }
  }
  typeWriter();
};
