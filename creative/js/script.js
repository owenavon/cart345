$(document).ready(function() {

    $("#dialog").dialog({
        autoOpen: false,
        
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
          $("#content-area").hide();

        }
    });

    $( "#accept" ).click(function() {
        $("#dialog").remove();
    });




    

});