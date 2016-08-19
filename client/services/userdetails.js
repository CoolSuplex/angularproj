System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Userdetails;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Userdetails = (function () {
                function Userdetails() {
                    this.userid = null;
                    this.username = null;
                    this.password = null;
                    this.usertype = null;
                    this.loggedin = false;
                }
                Userdetails.prototype.isLoggedin = function () {
                    return this.loggedin;
                };
                Userdetails.prototype.usertypeDetails = function () {
                    return this.usertype;
                };
                Userdetails.prototype.hasUsername = function () {
                    return this.username;
                };
                Userdetails.prototype.getUserdetails = function () {
                    return { userid: this.userid, username: this.username, password: this.password, usertype: this.usertype, loggedin: this.loggedin };
                };
                Userdetails.prototype.resetDetails = function () {
                    this.username = null;
                    this.password = null;
                    this.loggedin = false;
                    this.userid = null;
                    this.usertype = null;
                };
                Userdetails.prototype.setDetails = function (data) {
                    this.userid = data._id;
                    this.username = data.username;
                    this.password = null;
                    this.usertype = data.usertype;
                    this.loggedin = true;
                };
                Userdetails.prototype.returnArray = function (data) {
                    var iter = data.length;
                    var variresArray = [];
                    for (var i = 0; i < iter; i++) {
                        variresArray.push(data[i].candidatename);
                    }
                    var a = variresArray.reduce(function (acc, curr) {
                        if (typeof acc[curr] === 'undefined') {
                            acc[curr] = 1;
                        }
                        else {
                            acc[curr] += 1;
                        }
                        return acc;
                    }, {});
                    return a;
                };
                Userdetails = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Userdetails);
                return Userdetails;
            }());
            exports_1("Userdetails", Userdetails);
        }
    }
});
//# sourceMappingURL=userdetails.js.map