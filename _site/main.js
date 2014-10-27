(function ($) {

        // Registration Form
        RegisterForm: function () {
            $("#register-form").submit(function (e) {
                e.preventDefault();
                var name = $("#InputName1").val(),
                    email = $("#InputEmail1").val(),
                    subject = $("#InputSubject1").val(),
                    message = $("#message1").val(),
                    dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
                function isValidEmail(emailAddress) {
                    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                    return pattern.test(emailAddress);
                }

                if (isValidEmail(email) && (name.length > 1)) {
                    $.ajax({
                        type: "POST",
                        url: "php/process.php",
                        data: dataString,
                        success: function () {
                            $('#register-form .form-notification').fadeIn(500);
                        }
                    });
                } else {
                    if (!isValidEmail(email)) {
                        $('input#InputEmail1').addClass('not-valid');
                    } else {
                        $('input#InputEmail1').removeClass('not-valid');
                    }
                    if (name.length === 0) {
                        $('input#InputName1').addClass('not-valid');
                    } else {
                        $('input#InputName1').removeClass('not-valid');
                    }
                }
                return false;
            });
        },

})(jQuery);