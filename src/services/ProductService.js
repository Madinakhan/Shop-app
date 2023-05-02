"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var TV_1 = require("../modal/product/TV");
var Laptop_1 = require("../modal/product/Laptop");
var Monitor_1 = require("../modal/product/Monitor");
var Phone_1 = require("../modal/product/Phone");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.idGenerator = 0;
        this.productList = [];
    }
    ProductService.prototype.add = function (product) {
        product.setId(++this.idGenerator);
        this.productList.push(product);
    };
    ProductService.prototype.getById = function (id) {
        for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.getId() === id)
                return product;
        }
        throw new Error("Product not found");
    };
    ProductService.prototype.getPruductByType = function (type) {
        var products = [];
        switch (type) {
            case 'TV':
                for (var _i = 0, _a = this.productList; _i < _a.length; _i++) {
                    var product = _a[_i];
                    if (product instanceof TV_1.TV)
                        products.push(product);
                }
                break;
            case 'Laptop':
                for (var _b = 0, _c = this.productList; _b < _c.length; _b++) {
                    var product = _c[_b];
                    if (product instanceof Laptop_1.Laptop)
                        products.push(product);
                }
                break;
            case 'Monitor':
                for (var _d = 0, _e = this.productList; _d < _e.length; _d++) {
                    var product = _e[_d];
                    if (product instanceof Monitor_1.Monitor)
                        products.push(product);
                }
                break;
            case 'Phone':
                for (var _f = 0, _g = this.productList; _f < _g.length; _f++) {
                    var product = _g[_f];
                    if (product instanceof Phone_1.Phone)
                        products.push(product);
                }
                break;
            default:
                break;
        }
        return products;
    };
    ProductService.prototype.getProductsList = function () {
        return this.productList;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
