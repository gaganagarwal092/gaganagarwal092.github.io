<?php

$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$p_number = $_POST['p_number'];
$email = $_POST['email'];
$message = $_POST['message'];


$to = "hello@3designs.com.au,divya@bhavikagarwal.com,mittaldivya522@gmail.com,priyank.tyagi9045@gmail.com";
$subject = $f_name. "\r\n". "texted you from 3Designs Website";


$headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    // Create email headers
    $headers .= 'From: hello@3designs.com.au'."\r\n".
    'Reply-To: hello@3designs.com.au'."\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message =  $f_name . "," . $l_name  . "\n"."send you the following Message: " . "\n<br />" . $message . "\n<br /> " . "You can contact" . "\n" .$f_name. "\n". "via email"."\n".$email ."\n" . "or phone" ."\n" .$p_number;
//$message.= $b_name . "\r\n" . "," . $p_number . "\r\n" . "for the" . "\r\n" . $b_date . "\r\n" . "with" . "\r\n" . $nu_adult . "\r\n" . "at" . "\r\n" . $b_time;
$retval = mail($to, $subject, $message, $headers  );


// MailChimp API credentials
    $apiKey = 'bc1be8cadd6ef864f423168b70e9d35e-us9';
    $listID = '0b727ba239';

    // MailChimp API URL
    $memberID = md5(strtolower($email));
    $dataCenter = substr($apiKey, strpos($apiKey, '-') + 1);
    $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listID . '/members/' . $memberID;

    // member information
    $json = json_encode([
        'email_address' => $email,
        'status' => 'subscribed',
        'merge_fields' => [
            'FNAME' => $f_name,
            'LNAME' => $l_name,
            'PHONE' => $p_number,
        ]
    ]);

    // send a HTTP POST request with curl
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode == 200) {
        $_SESSION['msg'] = '<p style="color: #34A853">You have successfully subscribed to our list.</p>';
    } else {
        switch ($httpCode) {
            case 214:
                $msg = 'You are already subscribed.';
                break;
            default:
                $msg = 'Some problem occurred, please try again.';
                break;
        }
    }

    //echo $msg;
    



if ($retval == true) {
    echo "Message sent successfully...";
} else {
    echo "Message could not be sent...";
}
?>