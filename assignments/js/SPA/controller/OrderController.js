/* ------ generate order id ------ */
function generateOrderId() {
    if(orders.length!=0){
        var orderId= $("#orderId").val();
        var tempId = parseInt(orderId.split("-")[1]);
        tempId = tempId+1;
        $("#orderId").val("O-00"+tempId);
    }else{
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

/*
$('#selectCustomerId>option').click(function () {
   console.log( $('#selectCustomerId').val());
});*/
