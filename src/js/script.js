// import SlideNav from "./components/slide.js";
// import animarScroll from "./components/animarScroll.js";
// import escrever from "./components/maquinaEscrever.js";
// import scrollSuave from "./components/scrollSuave.js";

// const slide = new SlideNav(".slide", ".slide-wrapper");
// slide.init();
// slide.addControl(".custom-controls");

// window.addEventListener("scroll", animarScroll);
// scrollSuave();

// $(document).ready(function () {
//   $("#enviar").click(function () {
//     //coletando dados
//     var nome = $("#nome").val();
//     var email = $("#email").val();
//     var telefone = $("#telefone").val();
//     var mensagem = $("#mensagem").val();

//     /* Validando */
//     if (nome.length <= 3) {
//       alert("Informe seu nome");
//       return false;
//     }
//     if (email.length <= 5) {
//       alert("Informe seu email");
//       return false;
//     }
//     if (mensagem.length <= 5) {
//       alert("Escreva uma mensagem");
//       return false;
//     }

//     // construir a url
//     var urlData = "&nome=" + nome + "&email=" + email + "&msg=" + mensagem;

//     // ajax
//     $.ajax({
//       type: "POST" /*tipo de post*/,
//       url: "sendmail.php" /*endereço do php*/,
//       async: true,
//       data: urlData /*informa a url*/,
//       sucess: function (data) {
//         /*sucesso*/
//         $("#retorno").html(data); //imprime no html
//       },
//       beforeSend: function () {
//         //antes de enviar
//         $(".loading").fadeIn("fast"); //mostra loading
//       },
//       complete: function () {
//         $(".loading").fadeOut("fast"); //esconde loading
//       },
//     });
//   });
// });
