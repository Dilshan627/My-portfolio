function Customer(id, name, address, no) {
    let cusId = id;
    let cusName = name;
    let cusAddress = address;
    let cusPhone = no;

    this.setCusId = function (id) {
        cusId = id;
    }
    this.setCusName = function (name) {
        cusName = name;
    }
    this.setCusAddress = function (address) {
        cusAddress = address;
    }
    this.setCusPhone = function (no) {
        cusPhone = no;
    }
    this.getCusId = function () {
        return cusId;
    }
    this.getCusName = function () {
        return cusName;
    }
    this.getCusAddress = function () {
        return cusAddress;
    }
    this.getCusPhone = function () {
        return cusPhone;
    }

}

