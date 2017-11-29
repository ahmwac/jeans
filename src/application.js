
$(document).ready(function(){
    $('#myForm').on('submit', function(e) {
        e.preventDefault();
        var password = $("#password").val()
        if(  password==="123456") {
            this.submit()
        } else {
            $('#error').text("Din adgangskode er forkert!")
        }
    });
});