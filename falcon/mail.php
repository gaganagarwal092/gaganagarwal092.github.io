<?php

$fname = $_GET['fname'];
$email = $_GET['email'];
$phno = $_GET['phno'];
$lname = $_GET['lname'];

$to = "clairebraka@gmail.com";
$subject = "Message from Animate website";

$name = $fname . "&nbsp;" . $lname;
$header = "From: clairebraka@gmail.com  \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$message = "Name : " . $name . "<br>" . "Email : " . $email. "<br>". "Phone :" . $phno;

$retval = mail($to, $subject, $message, $header);


if ($retval == true) {	
    $data="Message sent successfully...";
} else {
    $data="Message could not be sent...";
}

echo json_encode($data);

?>