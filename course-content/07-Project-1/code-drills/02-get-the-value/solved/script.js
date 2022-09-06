$(document).ready(function () {
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        var firstname = $("#firstname").val().trim();
        var lastname = $("#lastname").val().trim();
        var email = $("#email").val().trim();
        var validAge = $("input[name='age']:checked").val();
        var location = [];
        $.each($("input[name='location']:checked"), function () {
            location.push($(this).val());
        })
        var experience = $("#experience").val();
        var position;
        // Choose position depending upon the experience
        switch (experience) {
            case "1-2 years":
                position = "Entry Level";
                break;
            case "2-4 years":
                position = "Mid Level";
                break;
            case ">4 years":
                position = "Experienced Level";
                break;
        }
        // Check if the candidate is old enough to apply for the job
        if (validAge === "yes") {
            $("#text").text("Thank you " + firstname + " " + lastname + " for submitting your profile with us!");
            $("#message").text("We will reach out to you at " + email + " when " + position + " opportunities come up in the following places:");
            $("#locationPreference").text(location.join(", "));
        }
        else {
            $("#text").text("Sorry! You aren't old enough to create a profile with us");
            $("#message").text("");
            $("#locationPreference").text("");
        }
        // Trigger the modal
        $("#response").modal("show");

    })
})