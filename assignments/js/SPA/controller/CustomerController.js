$("#btnSaveCustomer").click(function () {

    let cusId = $("#txtCusID").val();
    let cusName = $("#txtCusName").val();
    let cusAddress = $("#txtCusAddress").val();
    let cusPhone = $("#txtCusPn").val();

    var customer = {
        "id": cusId,
        "name": cusName,
        "address": cusAddress,
        "number": cusPhone
    }

    // console.log(customer);
    customers.push(customer);
    loadCustomer();
    clickEvent();
});

function loadCustomer() {
    $("#tblCustomer").empty();

    for (var customer of customers) {

        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.number}</td></tr>`;

        $("#tblCustomer").append(row);
    }
}

function clickEvent() {
    $('#tblCustomer>tr').click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let number = $(this).children(":eq(3)").text();

        $('#txtCusID').val(id);
        $('#txtCusName').val(name);
        $('#txtCusAddress').val(address);
        $('#txtCusPn').val(number);
    });
}

$('#txtCusID,#txtCusName,#txtCusName,#txtCusAddress').on('keydown',function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#txtCusID').on('keydown', function (event) {
    if (event.key == "Enter") {
        $('#txtCusName').focus();
    }
});

$('#txtCusName').on('keydown', function (event) {
    if (event.key == "Enter") {
        $('#txtCusAddress').focus();
    }
});

$('#txtCusAddress').on('keydown', function (event) {
    if (event.key == "Enter") {
        $('#txtCusPn').focus();
    }
});
