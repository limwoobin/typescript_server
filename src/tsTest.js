var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name...');
    };
    return Department;
}());
var Acounting = /** @class */ (function (_super) {
    __extends(Acounting, _super);
    function Acounting() {
        return _super.call(this, 'Acounting...') || this;
    }
    Acounting.prototype.printMetting = function () {
        console.log('Accounting metting...');
    };
    Acounting.prototype.generated = function () {
        console.log('generated...');
    };
    return Acounting;
}(Department));
var department = new Acounting();
department.printName();
department.printMetting();
department.generated();
var myAdd = function (x, y) {
    return x + y;
};
var myAdd2 = function (x, y) {
    return x + y;
};
var myAdd3 = function (x, y) {
    return x + y;
};
console.log(myAdd(3, 5));
console.log(myAdd2(5, 7));
console.log(myAdd(5, 10));
