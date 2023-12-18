
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<?php
date_default_timezone_set('Americana/Sao_Paulo');

if(isset($_POST['email']) && !empty($_POST['email'])) {

    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['message']);


    $to = "contato@robertorezendejr.com.br";
    $subject = "Roberto Rezende Jr - Newsletter";
    $body = "Nome: ".$nome. "\r\n".
            "Email: ".$email."\r\n".
            "Mensagem: ".$mensagem;
    $header = "From:atendimento@robertorezendejr.com.br"."\r\n".
                "Reply-To:".$email."\r\n".
                "X-Mailer: PHP/".phpversion();

    if(mail($to, $subject, $body, $header)){

        

        echo "<script>alert('E-mail enviado com sucesso!');location.href='index.html';</script>";

}else{

    

    echo "<script>alert('E-mail não pode ser enviado!');location.href='index.html';</script>";
}
    
}
?>