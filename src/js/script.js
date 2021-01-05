import SlideNav from "./components/slide.js";
import animarScroll from "./components/animarScroll.js";
import escrever from "./components/maquinaEscrever.js";
import scrollSuave from "./components/scrollSuave.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");

window.addEventListener("scroll", animarScroll);
scrollSuave();

const formulario = document.querySelector("#campo");

$(document).ready(function () {
  $(formulario).submit(function (e) {
    e.preventDefault();

    var email = $('[name="email"]').val();
    var nome = $('[name="nome"]').val();
    var telefone = $("[name=telefone").val();
    var mensagem = $('[name="mensagem"]').val();

    var dados =
      "&email=" +
      email +
      "&nome=" +
      nome +
      "&numero=" +
      telefone +
      "&mensagem=" +
      mensagem;

    jQuery.ajax({
      asyn: true,
      type: "POST",
      url: "/src/js/email/sendmail.php",
      dataType: "html",
      data: dados,
      success: function (data) {
        alert("Enviado ao servidor");
      },
      error: function () {
        alert("Erro");
      },
    });
    return false;
  });
});
