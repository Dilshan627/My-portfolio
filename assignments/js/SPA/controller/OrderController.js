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

    $('#OrderQty').val(" ");
});

$('#btnAdd').click(function () {
    let orderItemCode = $("#selectItemCode").val();
    let orderItemName = $("#txtOrderItemName").val();
    let orderItemQty = $("#OrderQty").val();
    let orderItemUnitPrice = $("#price").val();
    let orderItemTotal = orderItemQty * orderItemUnitPrice;

    var order = {
        "orderCode": orderItemCode,
        "orderName": orderItemName,
        "orderQty": orderItemQty,
        "orderUnitPrice": orderItemUnitPrice,
        "orderTotal": orderItemTotal
    }

    if ($("#price").val().length <= 0) {
        $('#selectItemCode').focus();
    }  else if ($('#OrderQty').val().length <= 0){
        $('#OrderQty').focus();
    }else {
       /* var orderItem = searchOrderItem(orderItemCode);
        if (orderItem != null){
            orderItem.orderCode=orderItemCode;
            orderItem.orderName=orderItemName
            orderItem.orderQty= orderItem.orderQty+orderItemQty;
            orderItem.orderUnitPrice=orderItemUnitPrice;
            orderItem.orderTotal= orderItem.orderTotal+orderItemTotal;
            orders.push(orderItem);
            loadOrder();
        }else {*/

            orders.push(order);
            loadOrder();
        //}

    }
});

function loadOrder() {
    $("#orderTable").empty();
    for (var order of orders) {
        var row = `<tr><td>${order.orderCode}</td><td>${order.orderName}</td><td>${order.orderQty}</td><td>${order.orderUnitPrice}</td><td>${order.orderTotal}</td><td><input id='btnDelete' class='btn btn-danger btn-sm' value='Delete' style="width: 75px"/></td></tr>`;

        $("#orderTable").append(row);
    }
}

function searchOrderItem(code) {
    for (let order of orders) {
        if (order.orderCode == code) {
            console.log(order)
            return order;
        }
    }
    return null;
}