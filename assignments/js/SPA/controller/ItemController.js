var itemCodeRegEx = /^(I00-)[0-9]{1,3}$/;
var itemNameRegEx = /^[A-z ]{4,}$/;
var itemUnitPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
var itemQtyOnHandRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

/*array regex and filed add*/
let itemValidations = [];
itemValidations.push({reg: itemCodeRegEx, field: $('#txtItemCode'), error: 'Item ID Pattern is Wrong : I00-001'});
itemValidations.push({
    reg: itemNameRegEx,
    field: $('#txtItemName'),
    error: 'Item Name is a required field : Minimum 3, Max 20, Spaces Allowed'
});
itemValidations.push({
    reg: itemUnitPriceRegEx,
    field: $('#txtItemQty'),
    error: 'Item Qty is a required field : Numbers'
});
itemValidations.push({reg: itemQtyOnHandRegEx, field: $('#txtItemPrice'), error: 'Item price / .00'});


$('#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice').on('keyup', function (event) {
    itemCheckValidity();
});

/*key event focus*/
$('#txtItemCode').on('keydown', function (event) {
    if (event.key == "Enter" && itemCheck(itemCodeRegEx, $('#txtItemCode'))) {
        $('#txtItemName').focus();
    }
});

$('#txtItemName').on('keydown', function (event) {
    if (event.key == "Enter" && itemCheck(itemNameRegEx, $('#txtItemName'))) {
        $('#txtItemQty').focus();
    }
});

$('#txtItemQty').on('keydown', function (event) {
    if (event.key == "Enter" && itemCheck(itemUnitPriceRegEx, $('#txtItemQty'))) {
        $('#txtItemPrice').focus();
    }
});

$('#txtItemPrice').on('keydown', function (event) {
    if (event.key == "Enter" && itemCheck(itemQtyOnHandRegEx, $('#txtItemPrice'))) {
        $('#btnSaveItem').focus();
    }
});


/*save item*/
$("#btnSaveItem").click(function () {

    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();

    var item = {
        "code": itemCode,
        "itemName": itemName,
        "itemQty": itemQty,
        "price": itemPrice
    }
    items.push(item);
    loadItem();
    itemClickEvent();
    itemClearAllTexts();
});

/*textfield clear*/
$('#btnClearItem').click(function () {
    itemClearAllTexts();
});

/*btn update*/
$("#btnUpdateItem").click(function () {
    let itemCode = $("#txtItemCode").val();
    let itemResponse = updateItem(itemCode);
    if (itemResponse) {
        alert("Item Updated Successfully");
        itemTextFieldValue("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});

/*btn delete*/
$("#btnDeleteItem").click(function () {
    let deleteCode = $("#txtItemCode").val();

    let option = confirm("Do you really want to delete item code :" + deleteCode);
    if (option) {
        if (deleteItem(deleteCode)) {
            // alert("Customer Successfully Deleted..");
            itemTextFieldValue("", "", "", "");
        } else {
            alert("No such item to delete. please check the code");
        }
    }
});

/*item id search btn focus*/
$('#txtSearchItemID').on('keydown', function (event) {
    if (event.code == "Enter") {
        $('#btnSearchItem').focus();
    }
})

/*btn item id search*/
$("#btnSearchItem").click(function () {
    let typedCode = $("#txtSearchItemID").val();
    let item = searchItem(typedCode);
    if (item != null) {
        itemTextFieldValue(item.code, item.itemName, item.itemQty, item.price);
    } else {
        alert("There is no Item available for that " + typedCode);
        itemTextFieldValue("", "", "", "");
    }
});

/*all item crud function*/
function loadItem() {
    $("#ItemTable").empty();
    for (var item of items) {
        var row = `<tr><td>${item.code}</td><td>${item.itemName}</td><td>${item.itemQty}</td><td>${item.price}</td></tr>`;
        $("#ItemTable").append(row);
    }
}

function itemClearAllTexts() {
    $("#txtItemCode").focus();
    $("#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice,#txtSearchItemID").val("");
}

function itemCheckValidity() {
    let errorCount = 0;
    for (let validation of itemValidations) {
        if (itemCheck(validation.reg, validation.field)) {
            itemSuccess(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            itemSetTextError(validation.field, validation.error);
        }
    }
    itemSetButtonState(errorCount);
}

function itemSetButtonState(value) {
    if (value > 0) {
        $("#btnSaveItem").attr('disabled', true);
    } else {
        $("#btnSaveItem").attr('disabled', false);
    }
}

function itemCheck(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function itemClickEvent() {
    $('#ItemTable>tr').click(function () {
        let itemCode = $(this).children(":eq(0)").text();
        let itemName = $(this).children(":eq(1)").text();
        let price = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();

        itemTextFieldValue(itemCode, itemName, price, qty);
    });
}

function itemTextFieldValue(itemCode, itemName, price, qty) {
    $('#txtItemCode').val(itemCode);
    $('#txtItemName').val(itemName);
    $('#txtItemQty').val(price);
    $('#txtItemPrice').val(qty);
}

function itemSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        itemdefaultText(txtField, "");
    } else {
        itemdefaultText(txtField, "");
    }
}

function itemdefaultText(txtField, error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function itemSetTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        itemdefaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function searchItem(code) {
    for (let item of items) {
        if (item.code == code) {
            return item;
        }
    }
    return null;
}

function deleteItem(itemCode) {
    let item = searchItem(itemCode);
    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        loadItem();
        itemClickEvent();
        return true;
    } else {
        return false;
    }
}

function updateItem(itemCode) {
    let item = searchItem(itemCode);
    if (item != null) {
        item.code = $("#txtItemCode").val();
        item.itemName = $("#txtItemName").val();
        item.itemQty = $("#txtItemQty").val();
        item.price = $("#txtItemPrice").val();
        loadItem();
        itemClickEvent();
        return true;
    } else {
        return false;
    }

}
