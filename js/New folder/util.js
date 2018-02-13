function isValidDateFormat(dateString) {
    var regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dateString.match(regex);
}

function isValidEmailFormat(emailString) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailString.match(regex);
}

function isValidURLFormat(urlString) {
    var regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    return urlString.match(regex);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function validateRadioButton(osButton) {
    osSelected = false;
    for (var i = 0; i !== osButton.length; i++) {
        var osBtn = osButton[i];
        if (osBtn.checked) {
            osSelected = true;
            break;
        }
    }
    return osSelected;
}

function validateCheckboxButton(langButton, min, max) {
    var numLangSelected = 0;
    for (var i = 0; i !== langButton.length; i++) {
        var langBtn = langButton[i];
        if (langBtn.checked) {
            numLangSelected++;
        }
    }
    return min < numLangSelected && max >= numLangSelected;
}

function validateCheckboxBtnJQ(btn, min, max){
    var i = 0;
    btn.each(function(){
        if($(this)[0].checked){
            i++;
        }
    });
    return min <= i && max >= i;  
}

function validateRadioBtnJQ(btn){
    var checked = false;
    btn.each(function(){
        if($(this)[0].checked){
            checked = true;
        }
        
    });
    console.log(checked);
    return checked;
}

function validateSkillLevel(skillButton) {
   
    var defaultSelection = e.options[e.selectedIndex].value;

    var strUser1 = e.options[e.selectedIndex].text;
    if (strUser == 0)
    {
        alert("Please select a user");
    }
}
