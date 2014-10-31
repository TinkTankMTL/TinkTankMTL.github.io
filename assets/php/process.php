<?php

    // Your Email Address
    $youremail = "tart2000design@gmail.com";

    // Register Form
    if ( isset($_POST['email']) && isset($_POST['name']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

        // Detect & Prevent Header Injections
        $test = "/(content-type|bcc:|cc:|to:)/i";
        foreach ( $_POST as $key => $val ) {
            if ( preg_match( $test, $val ) ) {
                exit;
            }
        }

        // Email Format
        $body  =    "Contact par le site TinkTank \n\n";
        $body .=    "========== \n\n";
        $body .=    "Name:  $_POST[name] \n\n";
        $body .=    "Email:  $_POST[email] \n\n";
        $body .=    "Object:  $_POST[object] \n\n";
        $body .=    "Message:  $_POST[message] \n\n";

        //Send email
        mail( $youremail, "Nouveau contact TinkTank", $body, "From:" . $_POST['email'] );

    }

?>