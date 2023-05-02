"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, manufacturer) {
        this.name = name;
        this.price = price;
        this.manufacturer = manufacturer;
    }
    ;
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.setName = function (newName) {
        this.name = newName;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Product.prototype.getmanufacturer = function () {
        return this.manufacturer;
    };
    Product.prototype.setmanufacturer = function (newmanufacturer) {
        this.name = newmanufacturer;
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.setId = function (newId) {
        this.id = newId;
    };
    return Product;
}());
exports.Product = Product;
