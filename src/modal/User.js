"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, userName, password, balance) {
        this.name = name;
        this.userName = userName;
        this.password = password;
        this.balance = balance;
    }
    ;
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (newName) {
        this.name = newName;
    };
    User.prototype.getuserName = function () {
        return this.userName;
    };
    User.prototype.setuserName = function (newuserName) {
        this.userName = newuserName;
    };
    User.prototype.getpassword = function () {
        return this.password;
    };
    User.prototype.setpassword = function (newpassword) {
        this.password = newpassword;
    };
    User.prototype.getbalance = function () {
        return this.balance;
    };
    User.prototype.setbalance = function (newbalance) {
        this.balance = newbalance;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setId = function (newId) {
        this.id = newId;
    };
    return User;
}());
exports.User = User;
