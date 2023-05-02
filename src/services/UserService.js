"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var User_1 = require("../modal/User");
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
        this.idGenerator = 0;
    }
    UserService.prototype.checkUserName = function (newuser) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.getuserName() == newuser)
                return true;
        }
        return false;
    };
    UserService.prototype.add = function (newuser) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (this.checkUserName(newuser.getuserName()))
                throw new Error("User already exists");
        }
        this.users.push(newuser);
        newuser.setId(++this.idGenerator);
    };
    UserService.prototype.signIn = function (userName, password) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.getuserName() == userName && user.getpassword() == password)
                return user;
        }
        throw new Error('User not found');
    };
    UserService.prototype.signUp = function (name, username, password) {
        if (this.checkUserName(username)) {
            throw new Error("User ".concat(username, " already exists"));
        }
        var user = new User_1.User(name, username, password, 1000000);
        this.add(user);
    };
    UserService.prototype.getUsersList = function () {
        return this.users;
    };
    return UserService;
}());
exports.UserService = UserService;
