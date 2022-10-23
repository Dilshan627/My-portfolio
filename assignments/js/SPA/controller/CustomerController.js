const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusPhoneRegEx = /^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$/;


/*reagex add array*/
let customerValidations = [];
customerValidations.push({reg: cusIDRegEx, field: $('#txtCusID'), error: 'Customer ID Pattern is Wrong : C00-001'});
customerValidations.push({
    reg: cusNameRegEx,
    field: $('#txtCusName'),
    error: 'Customer Name Pattern is Wrong : A-z 5-20'
});
customerValidations.push({
    reg: cusAddressRegEx,
    field: $('#txtCusAddress'),
    error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'
});
customerValidations.push({
    reg: cusPhoneRegEx,
    field: $('#txtCusPn'),
    error: 'Customer Tp is a required field : Minimum 10 Numbers'
});


$('#txtCusID,#txtCusName,#txtCusAddress,#txtCusPn').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#txtCusID,#txtCusName,#txtCusAddress,#txtCusPn').on('keyup', function (event) {
    checkValidity();
});
/*key event focus*/
$('#txtCusID').on('keydown', function (event) {
    if (event.key == "Enter" && check(cusIDRegEx, $('#txtCusID'))) {
        $('#txtCusName').focus();
    }
});

$('#txtCusName').on('keydown', function (event) {
    if (event.key == "Enter" && check(cusNameRegEx, $('#txtCusName'))) {
        $('#txtCusAddress').focus();
    }
});

$('#txtCusAddress').on('keydown', function (event) {
    if (event.key == "Enter" && check(cusAddressRegEx, $('#txtCusAddress'))) {
        $('#txtCusPn').focus();
    }
});

$('#txtCusPn').on('keydown', function (event) {
    if (event.key == "Enter" && check(cusPhoneRegEx, $('#txtCusPn'))) {
        $('#btnSaveCustomer').focus();
    }
});

/*regex check*/
function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function clickEvent() {
    $('#tblCustomer>tr').click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let number = $(this).children(":eq(3)").text();

        customerTextFieldValue(id, name, address, number);
    });
}

/*save customer*/
$("#btnSaveCustomer").click(function () {

   /* let cusId = $("#txtCusID").val();
    let cusName = $("#txtCusName").val();
    let cusAddress = $("#txtCusAddress").val();
    let cusPhone = $("#txtCusPn").val();
*/
   /* var customer = {
        "id": cusId,
        "name": cusName,
        "address": cusAddress,
        "number": cusPhone
    }*/

    let customer =new Customer($("#txtCusID").val(),$("#txtCusName").val(),$("#txtCusAddress").val(),$("#txtCusPn").val());

    customers.push(customer);

    loadCustomer();
    clickEvent();
    clearAllTexts();
});

/*textfield clear*/
$('#btnClearCustomer').click(function () {
    clearAllTexts();
});

/*btn update*/
$("#btnUpdateCustomer").click(function () {
    let customerID = $("#txtCusID").val();
    let response = updateCustomer(customerID);
    if (response) {
        alert("Customer Updated Successfully");
        customerTextFieldValue("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});

/*btn delete*/
$("#btnDeleteCustomer").click(function () {
    let deleteID = $("#txtCusID").val();

    let option = confirm("Do you really want to delete customer id :" + deleteID);
    if (option) {
        if (deleteCustomer(deleteID)) {
            // alert("Customer Successfully Deleted..");
            customerTextFieldValue("", "", "", "");
        } else {
            alert("No such customer to delete. please check the id");
        }
    }
});

/*customer id search btn focus*/
$('#txtSearchCusID').on('keydown', function (event) {
    if (event.code == "Enter") {
        $('#btnSearchCustomer').focus();
    }
})

/*btn customer id search*/
$("#btnSearchCustomer").click(function () {
    let typedId = $("#txtSearchCusID").val();
    let customer = searchCustomer(typedId);
    if (customer != null) {
        customerTextFieldValue(customer.id, customer.name, customer.address, customer.number);
    } else {
        alert("There is no cusotmer available for that " + typedId);
        customerTextFieldValue("", "", "", "");
    }
});

/*all crud function*/
function loadCustomer() {
    $("#tblCustomer").empty();
    for (var customer of customers) {
        var row = `<tr><td>${customer.getCusId()}</td><td>${customer.getCusName()}</td><td>${customer.getCusAddress()}</td><td>${customer.getCusPhone()}</td></tr>`;
        $("#tblCustomer").append(row);
    }
}

function clearAllTexts() {
    $("#txtCusID").focus();
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusPn,#txtSearchCusID").val("");
}

function checkValidity() {
    let errorCount = 0;
    for (let validation of customerValidations) {
        if (check(validation.reg, validation.field)) {
            textSuccess(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            setTextError(validation.field, validation.error);
        }
    }
    setButtonState(errorCount);
}

function setTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function textSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        defaultText(txtField, "");
    }
}

function defaultText(txtField, error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function setButtonState(value) {
    if (value > 0) {
        $("#btnSaveCustomer").attr('disabled', true);
    } else {
        $("#btnSaveCustomer").attr('disabled', false);
    }
}

function customerTextFieldValue(id, name, address, number) {
    $('#txtCusID').val(id);
    $('#txtCusName').val(name);
    $('#txtCusAddress').val(address);
    $('#txtCusPn').val(number);
}

function searchCustomer(cusID) {
    for (let customer of customers) {
        if (customer.id == cusID) {
            return customer;
        }
    }
    return null;
}

function deleteCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber, 1);
        loadCustomer();
        clickEvent();
        return true;
    } else {
        return false;
    }
}

function updateCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        customer.id = $("#txtCusID").val();
        customer.name = $("#txtCusName").val();
        customer.address = $("#txtCusAddress").val();
        customer.number = $("#txtCusPn").val();
        loadCustomer();
        clickEvent();
        return true;
    } else {
        return false;
    }

}




