"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Product_1 = require("./Product");
var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone(name, price, manufacturer, batterySize, cameraPix) {
        var _this = _super.call(this, name, price, manufacturer) || this;
        _this.name = name;
        _this.price = price;
        _this.manufacturer = manufacturer;
        _this.batterySize = batterySize;
        _this.cameraPix = cameraPix;
        return _this;
    }
    ;
    Phone.prototype.getBatterySize = function () {
        return this.batterySize;
    };
    Phone.prototype.setBatterySize = function (newBatterySize) {
        this.batterySize = newBatterySize;
    };
    Phone.prototype.getCameraPix = function () {
        return this.cameraPix;
    };
    Phone.prototype.setCameraPix = function (newCameraPix) {
        this.cameraPix = newCameraPix;
    };
    return Phone;
}(Product_1.Product));
exports.Phone = Phone;
