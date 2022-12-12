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

    
    // Accept Dialog
    $("#melting-text-dialog").dialog({
        autoOpen: false,
        width: 600,
        height: 620,
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


    // "Accept button"
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
                if ($(this).scrollTop() > 1385) {
                    console.log($(this).scrollTop());
                    // New Words
                    $("#changeOne").text("you");
                    $("#changeTwo").text("your environment");
                    $("#changeThree").text("enforce");
                } 
                else {
                    // Original Words
                    $("#changeOne").text("users");
                    $("#changeTwo").text("the world");
                    $("#changeThree").text("violate");
                }

                if ($(this).scrollTop() > 2705) {
                    // New Words
                    $("#changeFour").text("1");
                    $("#changeFive").text("political");
                    $("#changeSix").text("delete");
                } 
                else {
                    // Original Words
                    $("#changeFour").text("200000.0000000");
                    $("#changeFive").text("technical");
                    $("#changeSix").text("modify");
                }

                if ($(this).scrollTop() > 5605) {
                    // New Words
                    $("#changeSeven").text("read");
                    $("#changeEight").text("365");
                    $("#changeNine").text("by letting the problem fix it self");
                    $("#changeTen").text("U.S. Department of Defense");
                } 
                else {
                    // Original Words
                    $("#changeSeven").text("inspect");
                    $("#changeEight").text("0");
                    $("#changeNine").text("substitute delivery");
                    $("#changeTen").text("Services Store Operator");
                }

                if ($(this).scrollTop() > 7843.5) {
                    // New Words
                    $("#changeEleven").text("Did you really read everything?");
                } 
                else {
                    // Original Words
                    $("#changeEleven").text("");
                }

            });
        }
    });


    // Fake Accept
    $(".accept").click(function() {
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

    // Back Button
    $('#back').click(function() {
        $("#dialog-pop-one").dialog("close");
        $("#dialog-pop-two").dialog("close");
        $("#dialog-pop-three").dialog("close");
        $("#dialog-pop-four").dialog("close");
        $("#dialog-pop-five").dialog("close");

        $("#dialog").dialog("open");
    });


    // Accept
    $('#submit').click(function() {
        console.log("Final state");
        $("#dialog").dialog("close");
        $("#melting-text-dialog").dialog("open");
    });

    // https://www.javatpoint.com/jquery-radio-button
    $(document).ready(function () {  
        $("div#container").hide();  
        $("input[name=sh]").on("click", function () {  
            let selectedValue = $("input[name=sh]:checked").val();
            alert("Like everything? Please don't lie.");  
            if (selectedValue == "show") {  
                $("div#container").show();  
            }  
            else {  
                if (selectedValue == "hide") {  
                    $("div#container").hide();  
                }  
            }  

        });  
    });

});