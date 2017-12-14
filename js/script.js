$('#firstName').keyup(function () {

    var firstNameValue = $('#firstName').val();
    $('#firstN').val(firstNameValue);


});

$('#lastName').keyup(function () {
    var lastNameValue = $('#lastName').val();

    $('#lastN').val(lastNameValue);

});

$('#lastName').blur(function () {
    var firstNameValue = $('#firstN').val();
    var lastNameValue = $('#lastN').val();
    var fullName = firstNameValue+' '+lastNameValue;

    $('#fullN').val(fullName);

});