$(document).ready(function () {
    $("#submitBtn").on("click", function (event) {
        // 1. Prevent the default behaviour of the button
        // 2. Get the value of firstname, lastname, email from input form and store in respective variables
        //    `firstname`, `lastname`, `email`
        // 3. Get the value from radio button and store in a variable `validAge`
        //    Resources: https://api.jquery.com/checked-selector/
        //              https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php
        // 4. Get the value from checkbox(location preferences) and store in an array `location`
        //    Resources: https://api.jquery.com/checked-selector/
        //               https://www.tutorialrepublic.com/faq/how-to-get-the-values-of-selected-checkboxes-in-a-group-using-jquery.php
        //  5. Choose position based on the experience
        //     Logic: when experience is 1-2 years --> position is "Entry Level"
        //            when experience is 2-4 years --> position is "Mid Level"
        //            when experience is >4 years --> position is "Experienced Level"
        //     Save inside a variable `position`
        //  6. Check if the candidate is old enough to create a profile
        //     Logic: when `isValid` variable is yes, then display thank you message or else display a regret message
        //  7. If age is valid, then append a message with a thank you note to the `text` p-tag along with name
        //     sample message --> Thank you! `firstname` `lastname` for submitting your profile with us!
        //  8. `message` ptag should be appended with the following message
        //      sample message --> We will reach out to you at `email` when `position` opportunities come up in the following places:
        //  9. `locationPreference` should be appended with all preferred locations
        //      sample message --> location1, location2, location3  
        //  10. Trigger the modal
        //     Resource: https://www.aspsnippets.com/Articles/Open-Show-Bootstrap-Modal-Popup-Window-using-jQuery.aspx
    })
})