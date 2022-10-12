/* ------ generate order id ------ */
function generateOrderId() {
    if (orderDetails.length != 0) {
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

    qtyOnHandCheck();
});

$('#btnAdd').click(function () {
    let oId = $('#orderId').val();
    let orderItemCode = $("#selectItemCode").val();
    let orderItemName = $("#txtOrderItemName").val();
    let orderItemQty = $("#OrderQty").val();
    let orderItemUnitPrice = $("#price").val();
    let orderItemTotal = orderItemQty * orderItemUnitPrice;

    var order = {
        "orderId": oId,
        "orderCode": orderItemCode,
        "orderName": orderItemName,
        "orderQty": orderItemQty,
        "orderUnitPrice": orderItemUnitPrice,
        "orderTotal": orderItemTotal
    }

    if ($('#qtyOnH').val() == 0) {
        $('#btnAdd').attr('disabled', true);
    } else {
        $('#btnAdd').attr('disabled', false);
    }

    if ($("#price").val().length <= 0) {
        $('#selectItemCode').focus();
    } else if (orderItemQty == 0) {
        $('#OrderQty').focus();
    } else {
        let i = searchOrderItem(orderItemCode);

        if (i != null) {

            let qty = parseInt(i.orderQty);
            let tot = parseInt(i.orderTotal);

            qty = qty + parseInt(orderItemQty);
            tot = tot + parseInt(orderItemTotal);

            i.orderQty = qty;
            i.orderTotal = tot;
            loadOrder();
            totalCount();
        } else {
            orders.push(order);
            loadOrder();
            totalCount();
        }


    }
});

$('#btnPurchase').click(function () {

    if ($('#orderDate').val() == "") {
        $('#orderDate').focus();
    } else if ($('#txtName').val().length <= 0) {
        $('#selectCustomerId').focus();
    } else if ($('#txtCash').val().length <= 0) {
        $('#txtCash').focus();
    } else if ($('#txtDiscount').val().length <= 0) {
        $('#txtDiscount').focus();
    } else {
        alert("order purchase success")
        purchase();
        balanceOrder();
        loadOrder();
        itemCountSet();
    }
});

$('#btnNew').click(function () {
    newOrder();
});

function qtyOnHandCheck() {
    let qoh = $('#qtyOnH').val();
    if (qoh == 0) {
        $("#btnAdd").attr('disabled', true);
    } else {
        $("#btnAdd").attr('disabled', false);
    }
}

function newOrder() {
    generateOrderId();

    $('#selectCustomerId').val(" ");
    $('#txtName').val(" ");
    $('#txtContact').val(" ");
    $('#txtAddress').val(" ");
    $('#selectItemCode').val(" ");
    $('#txtOrderItemName').val(" ");
    $('#qtyOnH').val(" ");
    $('#price').val(" ");
    $('#OrderQty').val(" ");

    $('#orderTot').text(" ");
    $('#oSubTot').text(" ");
    $('#txtCash').val(" ");
    $('#txtDiscount').val(" ");
    $('#txtBalance').val(" ");

    orders.length = 0;
    loadOrder();
}

function totalCount() {
    let tot = 0;
    if (orders.length ==0){
        $('#orderTot').text(" ");
    }else {
        for (let i = 0; i < orders.length; i++) {
            tot = tot + orders[i].orderTotal.valueOf();
            $('#orderTot').text(tot);
        }
    }
}

function purchase() {
    let oId = $('#orderId').val();
    let cusId = $('#selectCustomerId').val();
    let date = $('#orderDate').val();
    let total = $('#orderTot').text();

    var oDetails = {
        "oId": oId,
        "cusId": cusId,
        "date": date,
        "total": total
    }

    orderDetails.push(oDetails);

}

function balanceOrder() {
    var t = parseInt($('#orderTot').text());
    let cash = parseInt($('#txtCash').val());
    let discount = parseInt($('#txtDiscount').val());

    let z = t * discount / 100;

    t = t - z;
    $('#oSubTot').text(t);
    $('#txtBalance').val(cash - t);
}

/*add button event focus*/
$('#OrderQty').on('keydown', function (event) {
    if (event.key == "Enter") {
        $('#btnAdd').focus();
    }
});

$('#txtCash').on('keydown', function (event) {
    if (event.key == "Enter") {
        $('#txtDiscount').focus();
    }
});

$('#txtDiscount').on('keydown', function (event) {
    if (event.key == "Enter") {
        $('#btnPurchase').focus();
    }
});

function defaultFocus() {
    $('#selectCustomerId').focus();
}

function loadOrder() {
    $("#orderTable").empty();
    for (var order of orders) {
        var row = `<tr><td>${order.orderCode}</td><td>${order.orderName}</td><td>${order.orderQty}</td><td>${order.orderUnitPrice}</td><td>${order.orderTotal}</td></tr>`;
        $("#orderTable").append(row);
    }
    bindDeleteEvent();
}

function searchOrderItem(code) {
    for (let order of orders) {
        if (order.orderCode == code) {
            return order;
        }
    }
    return null;
}

function bindDeleteEvent() {
    $('#orderTable>tr').on('dblclick',function (){
        let code= $(this).children(":eq(0)").text();
         deleteObject(code);
         console.log(code);
         loadOrder();
       /* $(this).remove();*/
    });
}

function deleteObject(code) {
    let Item = searchOrderItem(code);
    if (Item != null) {
        let indexNumber = orders.indexOf(Item);
        orders.splice(indexNumber, 1);
        totalCount();
        return true;
    } else {
        return false;
    }
}

function itemCountSet() {
    for (let i=0;i<orders.length;i++){
        for (let j=0;j<items.length;j++){
            if (orders[i].orderCode == items[j].code){
                let uQty =parseInt(items[j].itemQty);
                let oQty =parseInt(orders[i].orderQty);
                uQty=uQty-oQty;
                items[j].itemQty=uQty;
            }
        }
    }
}