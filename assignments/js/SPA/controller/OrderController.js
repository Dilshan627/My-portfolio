/* ------ generate order id ------ */
function generateOrderId() {
    if (orders.length != 0) {
        var orderId = $("#orderId").val();
        var tempId = parseInt(orderId.split("-")[1]);
        tempId = tempId + 1;
        $("#orderId").val("O-00" + tempId);
    } else {
        $("#orderId").val("O-001");
    }
}

/*customer id load*/
function customerIdOption() {
    $('#selectCustomerId').empty();
    for (let cus of customers) {
        $('#selectCustomerId').append(`<option>${cus.id}</option>`)
    }
}

/*item code load*/
function itemCodeOption() {
    $('#selectItemCode').empty();
    for (let item of items) {
        $('#selectItemCode').append(`<option>${item.code}</option>`)
    }
}

/*customer detail load*/
$('#selectCustomerId').click(function () {
    let cusId = $('#selectCustomerId').val();

    let customer = searchCustomer(cusId);
    $('#txtName').val(customer.name);
    $('#txtAddress').val(customer.address);
    $('#txtContact').val(customer.number);

});

/*item detail load*/
$('#selectItemCode').click(function () {
    let code = $('#selectItemCode').val();
    let item = searchItem(code);

    $('#txtOrderItemName').val(item.itemName);
    $('#qtyOnH').val(item.itemQty);
    $('#price').val(item.price);
});

$('#btnAdd').click(function () {
    let orderItemCode = $("#txtItemCode").val();
    let orderItemName = $("#txtItemName").val();
    let orderItemQty = $("#txtItemQty").val();
    let orderItemUnitPrice = $("#txtItemPrice").val();
    let orderItemTotal = $("#txtItemPrice").val();

    var order = {
        "orderItemCode": orderItemCode,
        "orderItemName": orderItemName,
        "orderItemQty": orderItemQty,
        "orderItemUnitPrice": orderItemUnitPrice,
        "orderItemTotal": orderItemTotal
    }
    orders.push(order);
    loadOrder();
});

function loadOrder() {
    $("#orderTable").empty();
    for (var order of orders) {
        var row = `<tr><td>${order.orderItemCode}</td><td>${order.orderItemName}</td><td>${order.orderItemQty}</td><td>${order.orderItemUnitPrice}</td><td>${order.orderItemTotal}</td><td><input id='btnDelete' class='btn btn-danger btn-sm' value='Delete' style="width: 75px"/></td></tr>`;
        $("#orderTable").append(row);
    }
}

