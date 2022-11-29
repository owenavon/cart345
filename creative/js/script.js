$(document).ready(function() {

    // Main Dialog
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


    // Dialog Top
    $("#dialog-pop-one").dialog({
        autoOpen: false,
        position: {
            at: "top"
        }
    }).parent().resizable({
        containment: "body",
        disabled: true
    }).draggable({
        containment: "body",
        disabled: true
    });


    // Dialog Right
    $("#dialog-pop-two").dialog({
        autoOpen: false,
        position: {
            at: "right"
        }
    }).parent().resizable({
        containment: "body",
        disabled: true
    }).draggable({
        containment: "body",
        disabled: true
    });


    // Dialog Bottom
    $("#dialog-pop-three").dialog({
        autoOpen: false,
        position: {
            at: "bottom"
        }
    }).parent().resizable({
        containment: "body",
        disabled: true
    }).draggable({
        containment: "body",
        disabled: true
    });


    // Dialog Left
    $("#dialog-pop-four").dialog({
        autoOpen: false,
        position: {
            at: "left"
        }
    }).parent().resizable({
        containment: "body",
        disabled: true
    }).draggable({
        containment: "body",
        disabled: true
    });


    // Dialog Centre
    $("#dialog-pop-five").dialog({
        autoOpen: false,
        position: {
            at: "center"
        }
    }).parent().resizable({
        containment: "body",
        disabled: true
    }).draggable({
        containment: "body",
        disabled: true
    });


    $(document).keypress(function(event) {
        let keycode = (event.keyCode ? event.keyCode : event.which);

        if (keycode == '13') {
            console.log('Enter Pressed');
            $("#main-title").remove();
            $("#secondary-title").remove();
            $("#tertiary-title").remove();

            $("#dialog").dialog("open");
            $("#content-area").remove();

            $("#dialog-content").scroll(function () {
                if ($(this).scrollTop() > 25) {
                    // New Words
                    $("#changeOne").text("today")
                    $("#changeTwo").text("hi")
                    $("#changeThree").text("secret")
                    $("#changeFour").text("potato")
                } 


                else {
                    // Original Words
                    $("#changeOne").text("ipsum")
                    $("#changeTwo").text("sit")
                    $("#changeThree").text("leo")
                    $("#changeFour").text("ligula")
                }
            });
        }


        // https://linuxhint.com/disable-or-enable-button-using-javascript-and-jquery/#:~:text=For%20enabling%20and%20disabling%20the,or%20enable%20the%20button%2C%20respectively.
        let input = document.querySelector("#Text");
        let button = document.querySelector("#submit-button");
        input.addEventListener("change", stateHandle);
        function stateHandle() {
            if (document.querySelector("#Text").value !="today") {
            button.disabled = true;
            }
            else {
            button.disabled = false;
            }
        }


    });


    $("#accept").click(function() {
        $("#dialog").dialog("close");

        setTimeout(function() {
            $("#dialog-pop-one").dialog("open");
        }, 1000);

        setTimeout(function() {
            $("#dialog-pop-two").dialog("open");
        }, 1500);

        setTimeout(function() {
            $("#dialog-pop-three").dialog("open");
        }, 2000);
        
        setTimeout(function() {
            $("#dialog-pop-four").dialog("open");
        }, 2500);

        setTimeout(function() {
            $("#dialog-pop-five").dialog("open");
        }, 3000);
    });

    $('#back').click(function() {
        $("#dialog-pop-one").dialog("close");
        $("#dialog-pop-two").dialog("close");
        $("#dialog-pop-three").dialog("close");
        $("#dialog-pop-four").dialog("close");
        $("#dialog-pop-five").dialog("close");

        $("#dialog").dialog("open");
    });

    $('#submit-button').click(function() {
        console.log("YUPP");
    });

});