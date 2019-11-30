<?php
$f_name = $_POST['f_name'];
$femail = $_POST['email'];
$message = $_POST['message'];
$to = "info@vay-sports.com";
$subject = "Message from VAY Website";


$header = "From:info@vay-sports.com \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$message = "Full Name: " . $f_name . "\n<br/>" ."Email: " . $femail . "\n<br/>". "Message: " . $message;

$retval = mail($to, $subject, $message, $header);


if ($retval == true) {
    echo "Message sent successfully...";
} else {
    echo "Message could not be sent...";
}
?>
