$(document).ready(function() {

    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        height: 515
    }).parent().resizable({
        containment: "body",
        disabled: true
    }).draggable({
        containment: "body",
        disabled: true
    });


    $("#dialog-test").dialog({
        autoOpen: false,
    }).parent().resizable({
        containment: "body",
        disabled: true
    }).draggable({
        containment: "body",
        disabled: false
    });


    $(document).keypress(function(event) {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
          console.log('Enter Pressed');
          $("#main-title").remove();
          $("#secondary-title").remove();
          $("#tertiary-title").remove();

          $("#dialog").dialog("open");
          $("#content-area").hide();

            $("#dialog-content").scroll(function () {
                if ($(this).scrollTop() > 25) {
                    // New Words
                    $("#changeOne").text("today")
                    $("#changeTwo").text("hi")
                    $("#changeThree").text("secret")
                } 
                else {
                    // Original Words
                    $("#changeOne").text("ipsum")
                    $("#changeTwo").text("sit")
                    $("#changeThree").text("leo")
                }
            });
        }
    });


    $( "#accept" ).click(function() {
        $("#dialog").remove();

        let i = 0;
        // This block will be executed 100 times.
        setInterval(function() {
            if (i == 5) {
                clearInterval(this);
            } 
            else {
                console.log('Currently at ' + (i++));
                 $("#dialog-test").dialog("open");
            } 
        }, 1000);         
    });

    


});