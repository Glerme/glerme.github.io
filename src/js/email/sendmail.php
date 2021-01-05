<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$numero = $_POST['numero'];
$menssagem = $_POST['mensagem'];


$to = "guiggff@gmail.com";
$subject = "$numero";
$mensagem = "<strong>Nome:</strong> $nome<br /><br /><strong>E-mail:</strong>$email<br /><br /><strong>Numero:</strong> $numero<br /><br /><strong>Mensagem:</strong> $menssagem ";
$header = "MIME-Version: 1.0\n";
$header .= "Content-type: text/html; charset=iso-8859-1\n";
$header .= "From: $email\n";
mail($to, $subject, $mensagem, $header);
echo "Enviado!";

?>







