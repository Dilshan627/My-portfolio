var num1, num2, operator;
$('.clc').click(function () {
    $('#display').val($('#display').val() + $(this).val())
});

$('.clear').click(function () {
    $('#display').val(' ');
});


$('.sum').click(function () {
    num1 = $('#display').val();
    operator = "+";
    $('#display').val(' ');

});

$('.sub').click(function () {
    num1 = $('#display').val();
    operator = "-";
    $('#display').val(' ');

});

$('.division').click(function () {
    num1 = $('#display').val();
    operator = "/";
    $('#display').val(' ');

});

$('.multi').click(function () {
    num1 = $('#display').val();
    operator = "*";
    $('#display').val(' ');


});

$('.finalResult').click(function () {
    num2 = $('#display').val();

    finalResult();
});

function finalResult() {

    switch (operator) {

        case "+":
            var total = parseFloat(num1) + parseFloat(num2);
            $('#display').val(total);
            break;

        case "-":
            var total = parseFloat(num1) - parseFloat(num2);
            $('#display').val(total);
            break;
        case "/":
            var total = parseFloat(num1) / parseFloat(num2);
            $('#display').val(total);
            break;
        case "*":
            var total = parseFloat(num1) * parseFloat(num2);
            $('#display').val(total);
            break;
    }

}


