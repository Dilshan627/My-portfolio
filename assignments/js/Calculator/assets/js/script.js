var num1,num2,total,operator;

$('.clc').click(function () {
    $('#display').val($('#display').val() + $(this).val())
});
$('.clear').click(function () {
    $('#display').val(' ');
});

$('.sum').click(function () {
    num1 = $('#display').val();
    operator = '+';
    $('#display').val(' ');
});

$('.sub').click(function () {
    num1 = $('#display').val();
    operator = '-';
    $('#display').val(' ');
});
$('.division').click(function () {
    num1 = $('#display').val();
    operator = '/';
    $('#display').val(' ');
});
$('.multi').click(function () {
    num1 = $('#display').val();
    operator = '*';
    $('#display').val(' ');
});



$('.finalResult').click(function () {
    switch (operator){
        case '+':$('#result').val(num1+num2);break;
        case '-':$('#result').val(num1-num2);break;
        case 'x':$('#result').val(num1*num2);break;
        case '/':$('#result').val(num1/num2);break;
    }


    console.log($('#display').val());
});


