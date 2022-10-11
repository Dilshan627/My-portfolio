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


    let date = $('#orderDate').val();

    if ($('#orderDate').val() == "") {
        $('#orderDate').focus();
    } else if ($('#selectCustomerId').val().length <= 0) {
        $('#selectCustomerId').focus();
    } else if ($('#txtCash').val().length <= 0) {
        $('#txtCash').focus();
    } else if ($('#txtDiscount').val().length <= 0) {
        $('#txtDiscount').focus();
    } else {
        console.log("place")
    }

    /*if ($('#orderDate').val() == null){
        $('#orderDate').focus();
    }*/

    /* purchase();

     newOrder();
     loadOrder();*/
});

$('#btnNew').click(function () {
    newOrder();
});

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

    orders.length = 0;
}

function totalCount() {
    let tot = 0;
    for (let i = 0; i < orders.length; i++) {
        tot = tot + orders[i].orderTotal.valueOf();
        $('#orderTot').text(tot);
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


/*$('#btnDelete').click(function () {
    console.log("gg")
});*/

/*function deleteClockEvent() {
    $('#orderTable>tr').click(function () {
        let c =$(this).children(":eq(0)").text();
        $('#orderTable>tr').children(":eq(5)").click(function () {
          let del = $(this).children(":eq(0)").text();
           cardItemDelete(c,del);
        });
    });
}*/

/*
function cardItemDelete(code, val) {
    if (val=="Delete"){
        let order = searchOrderItem(code)
        let indexNumber = orders.indexOf(order);
        orders.splice(indexNumber, 1);
        loadOrder();
        return true;
    } else {
        return false;
    }

}
*/


function loadOrder() {
    $("#orderTable").empty();
    for (var order of orders) {
        var row = `<tr><td>${order.orderCode}</td><td>${order.orderName}</td><td>${order.orderQty}</td><td>${order.orderUnitPrice}</td><td>${order.orderTotal}</td><td>
        <button type="button" class="btn btn-danger btn-sm" id="btnDelete">Delete</button></td></tr>`;

        <!--<input id='btnDelete' class='btn btn-danger btn-sm' value='Delete' style="width: 75px"/>-->

        $("#orderTable").append(row);
    }
}

function searchOrderItem(code) {
    for (let order of orders) {
        if (order.orderCode == code) {
            return order;
        }
    }
    return null;
}

