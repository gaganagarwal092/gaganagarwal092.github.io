<?php

$name = $_GET['name'];
$email = $_GET['email'];
$phonenumber = $_GET['pnumber'];


$to = "designowebtech@gmail.com,raghav.designoweb@gmail.com";
$subject = "Message from Interiorsbook website";


$header = "From:designowebtech@gmail.com   \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$message = "Full name: " . $name . "<br>" . "Email : " . $email . "<br>" ."Phone number : " . $phonenumber;

$retval = mail($to, $subject, $message, $header);


if ($retval == true) {
    
    $data="Message sent successfully...";
// header('Location: '.$_SERVER['PHP_SELF']);  die;
}
else {
    $data="Message could not be sent...";
//   header('Location: '.$_SERVER['PHP_SELF']);  die;
}

echo json_encode($data);
?>