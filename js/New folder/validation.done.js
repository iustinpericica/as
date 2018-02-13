$(document).ready(function (){

    // This method will get a refference to
    // the submit button and will call the 
    // function submitForm when the button
    // is pressed by the user.
    $('#submit').on("click", submitForm); 
    // This method will get a reference to the delete button.
    // In case the button is pressed, the function onDeleteRow
    // is called by the browser.
    $('#subscriptions-table tbody').on("click", '.btn-delete', onDeleteRow);
    
    function submitForm(e){
        // Prevents the refresh of the page or
        // in case the form has a action tag specified
        // will prevent it to redirect the user
        // to that page.
        e.preventDefault();
 
        //calling the function clearErrors
        clearErrors();
        //Checks if the variable valid is true, if it is
        // the input will be showed in the table
        if (validateForm()){
            //getting a refference to the table body
            var tableBody = $('#subscriptions-table tbody');
            var row = []; //declaring an array
            //Populating the array with the input of the user.
            row['username'] = $('#username').val();
            row['email'] = $('#email').val();
            row['phoneNumber'] = $('#phoneNumber').val();
            row['dob'] = $('#dob').val();
            row['os'] = $('[name = "os"]').val();
            // Calling the function appendRow passing in the 
            // refference to the table body and the user input.
            appendRow(tableBody, row);
            // Calling the function clearForm.
            clearForm();
        }
        
        
    }


    //---------------------------------------------------
    // Clears the form when submit is pressed and the
    // values are in valid.
    //---------------------------------------------------
    function clearForm() {
        $('#username').val("");
        $('#password').val("");     
        $('#confirmPassword').val("");
        $('#email').val("");
        $('#phoneNumber').val("");
        $('#dob').val("");
        $('#website').val("");
        // checks the frist one and unchecks it 
        // could be done in a loop as well
        $('[name = "os"]')[0].checked = true;
        $('[name = "os"]')[0].checked = false;
        // go trought all the checkboxes and uncheck all of them
        $('[name="language[]"]').each(function (){
            $(this)[0].checked = false;});
        $('[name = "skillLevel[]"]').val("default");
        
        $('#username').focus();
    }
    //---------------------------------------------------
    // Creates a new row in the table and populates it
    // with some values entered in the form
    //---------------------------------------------------
    function appendRow(tableBody, row) {
        var content = "<tr>" + 
                      "<td>" + row['username'] + "</td>" + 
                      "<td>" + row['email'] + "</td>" +
                      "<td>" + row['phoneNumber'] + "</td>" +
                      "<td>" + row['dob'] + "</td>" +
                      "<td>" + row['os'] + "</td>" + 
                      "<td><button class='btn btn-danger btn-delete'>Delete</button>"
                      "</tr>";
        //will write into the html page
        tableBody.append(content);
    }
    
    
    
    //---------------------------------------------------
    // removes the specified row from the table
    //---------------------------------------------------
    function onDeleteRow() {
        this.closest('tr').remove();
    }
    
    //---------------------------------------------------
    // validats all the fields of the form
    //---------------------------------------------------
    function validateForm(){
        // This variable will be set to false in case any
        // input is invalid.
        var valid = true;
        //---------------------------------------------------
        // getting a refference of all the form fields
        //---------------------------------------------------
        var username = $('#username').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        var email = $('#email').val();
        var phoneNumber = $('#phoneNumber').val();
        var dob = $('#dob').val();
        var website = $('#website').val();
        var os = $("[name = 'os']");
        var language = $('[name = "language[]"]');
        var skillLevel = $('[name = "skillLevel[]"]');
        
        //---------------------------------------------------
        //username validation
        //---------------------------------------------------
        if(username === ''){
            console.log("No username entered");
            $('#usernameError').html("Username not set");
            valid = false;
        }
        
        //---------------------------------------------------
        //password validation
        //---------------------------------------------------
        if(password === ''){
            console.log("Password not set");
            $('#passwordError').html('Password not set');
            valid = false;
        }
        
        //---------------------------------------------------
        //confirm password validation
        //---------------------------------------------------
        if(confirmPassword === ''){
            console.log("Confirm password not set");
            $('#confirmPasswordError').html('Confirm password not set');
            valid = false;
        } else if(!(password === confirmPassword)){
            $('#confirmPasswordError').html('Password must match');
            valid = false;
        }
        
        //---------------------------------------------------
        //email validation
        //---------------------------------------------------
        if(email === ''){
            console.log("Email not set");
            $('#emailError').html("Email not set");
            valid = false;
        } else if(!isValidEmailFormat(email)){
            console.log("Invalid email");
            valid = false;
            $('#emailError').html("Invalid email");   
        }
        //---------------------------------------------------
        //phone number
        //---------------------------------------------------
        if(!(phoneNumber === '') && !isNumeric(phoneNumber)){
            console.log("Not valid email");
            valid = false;
            $('#phoneNumberError').html("Invalid phone number");   
        }
        
        //---------------------------------------------------
        //dob validation
        //---------------------------------------------------
        if(dob === ''){
            console.log("Dob not set");
            valid = false;
            $('#dobError').html("Date of birth is required");
        } else if(!isValidDateFormat(dob)){
            console.log("Invalid dob format");
            valid = false;
            $('#dobError').html("Invalid format");
        }
        
        //---------------------------------------------------
        //website validation
        //---------------------------------------------------
        if(!(website === '')){
            if(!isValidURLFormat(website)){
                valid = false;
                console.log("Invalid website");
                $('#websiteError').html("Invalid format");
            }
        }
        
        //---------------------------------------------------
        //os validation
        //---------------------------------------------------
        if(!validateRadioBtnJQ(os)){
            console.log("Os error");
            valid = false;
            $('#osError').html("Please select at least one operating system");
        }
        
        
        //---------------------------------------------------
        //language validation
        //---------------------------------------------------
        if(!validateCheckboxBtnJQ(language, 1, 3)){
            valid = false;
            console.log("Language error");
            $('#langError').html("Please select at least 1 and maximum of 3 languages");   
        }
        
        //---------------------------------------------------
        //skill validation
        //---------------------------------------------------
        var availableSkills = ["beginner", "intermediate", "advanced", "pro"];
        var checked = availableSkills.indexOf(skillLevel.val());
        if(checked == -1){
            valid = false;
            $('#skillLevelError').html("Please select your skill level");  
        }  
        return valid;
    }


    //---------------------------------------------------
    //This function will clear all the text that is 
    //written in the span elements that represents 
    //the errors of the form. ".html" function 
    //overwriting the text that is in between 
    //the html tag that coresponds with the 
    //specified id.
    //---------------------------------------------------
    function clearErrors(e){
        $('#usernameError').html('');
        $('#passwordError').html('');
        $('#confirmPasswordError').html('');
        $('#emailError').html('');
        $('#phoneNumberError').html('');
        $('#dobError').html('');
        $('#websiteError').html('');
        $('#osError').html('');
        $('#langError').html('');
        $('#skillLevelError').html('');
        $('#randomSelectError').html('');
    }
	
});
        