// Don't worry too much about this Javascript. This is just providing some click functionality to our demo page.

$(document).ready(function(){

    // hide initial alert after 3 seconds
    setTimeout(function(){
        $("#login-success").fadeOut();
    }, 3000)

    // dynamically generate specific alerts 
    $("#bad-alerts").on("click", function(){

        var badAlert = $("<div>").addClass("alert alert-danger").text("La, la, laaa, wait till I get my money right.")
        $("#bad-alerts-container").append(badAlert);
    });

    $("#good-alerts").on("click", function(){

        var goodAlert = $("<div>").addClass("alert alert-primary").attr("role","alert").text("No one man should have all that power.");
        $("#good-alerts-container").append(goodAlert);
    });

});