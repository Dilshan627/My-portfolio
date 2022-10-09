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


function itemCheckValidity() {

}

function itemCheck(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function ItemClickEvent() {
    $('#ItemTable>tr').click(function () {
        let itemCode = $(this).children(":eq(0)").text();
        let itemName = $(this).children(":eq(1)").text();
        let price = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();

        ItemTextFieldValue(itemCode, itemName, price, qty);
    });
}

function ItemTextFieldValue(itemCode, itemName, price, qty) {
    $('#txtItemCode').val(itemCode);
    $('#txtItemName').val(itemName);
    $('#txtItemQty').val(price);
    $('#txtItemPrice').val(qty);
}