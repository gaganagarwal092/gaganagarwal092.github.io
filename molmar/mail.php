<?php

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$title = $_POST['title'];
$company = $_POST['company'];
$country = $_POST['country'];
$website= $_POST['website'];
$message = $_POST['message'];

$to = "mittaldivya522@gmail.com";
$subject = "Message from molmar Website";


$header = "From:mittaldivya522@gmail.com \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$message = "FirstName: " . $fname . "\r\n" . "LastName: " . $lname . "\r\n" . "Title:" . $title . "Company: " . $company . "Country: " . $country . "\r\n"  ."Website: " . $website . "\r\n" ."Message: " . $message;

$retval = mail($to, $subject, $message, $header);


if ($retval == true) {
    echo "Message sent successfully...";
} else {
    echo "Message could not be sent...";
}
?>