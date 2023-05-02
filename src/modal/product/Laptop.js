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
exports.Laptop = void 0;
var Product_1 = require("./Product");
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(name, price, manufacturer, RAM, CPU, GPU, memory) {
        var _this = _super.call(this, name, price, manufacturer) || this;
        _this.name = name;
        _this.price = price;
        _this.manufacturer = manufacturer;
        _this.RAM = RAM;
        _this.CPU = CPU;
        _this.GPU = GPU;
        _this.memory = memory;
        return _this;
    }
    ;
    Laptop.prototype.getRAM = function () {
        return this.RAM;
    };
    Laptop.prototype.setRAM = function (newRAM) {
        this.RAM = newRAM;
    };
    Laptop.prototype.getCPU = function () {
        return this.CPU;
    };
    Laptop.prototype.setCPU = function (newCPU) {
        this.CPU = newCPU;
    };
    Laptop.prototype.getGPU = function () {
        return this.GPU;
    };
    Laptop.prototype.setGPU = function (newGPU) {
        this.GPU = newGPU;
    };
    Laptop.prototype.getMemory = function () {
        return this.memory;
    };
    Laptop.prototype.setMemory = function (newMemory) {
        this.memory = newMemory;
    };
    return Laptop;
}(Product_1.Product));
exports.Laptop = Laptop;
