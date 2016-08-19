System.register(['angular2/core', 'angular2/router', '../../services/httpprovider', '../../services/userdetails', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, router_1, httpprovider_1, userdetails_1, http_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (httpprovider_1_1) {
                httpprovider_1 = httpprovider_1_1;
            },
            function (userdetails_1_1) {
                userdetails_1 = userdetails_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(_userdetails, _httpprovider, _router) {
                    this._userdetails = _userdetails;
                    this._httpprovider = _httpprovider;
                    this._router = _router;
                    this.user = { username: "", password: "" };
                    this._userdetails.resetDetails();
                }
                RegisterComponent.prototype.register = function (user) {
                    var vari = this;
                    this._httpprovider.httpReq('http://127.0.0.1:9001/register', 'POST', { username: user.username, password: user.password }, null).subscribe(function (data) {
                        if (data.username !== null || data.username !== undefined || data.usertype !== null || data.usertype !== undefined) {
                            vari._userdetails.setDetails(data);
                            if (vari._userdetails.usertypeDetails() === 'admin') {
                                vari._router.navigate(['AdminCmp']);
                            }
                            else if (vari._userdetails.usertypeDetails() === 'user') {
                                vari._router.navigate(['UsersCmp']);
                            }
                            else {
                                console.log("Error Occurred during Login.");
                            }
                        }
                        else {
                            console.log("Error Occurred during Login. No username or usertype present.");
                        }
                    });
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        template: "\n  <center>\n  <div>Register</div><br>\n    <form (ngSubmit)=\"register(user)\">    \n      <input type=\"text\" [(ngModel)]=\"user.username\" size=\"20\" placeholder=\"new username\"><br><br>\n      <input type=\"password\" [(ngModel)]=\"user.password\" size=\"20\" placeholder=\"new password\"><br><br>\n      <input type=\"submit\" value=\"Register\">\n    </form>\n  </center>\n  ",
                        providers: [http_1.Http, http_1.HTTP_PROVIDERS, httpprovider_1.Httpprovider]
                    }), 
                    __metadata('design:paramtypes', [userdetails_1.Userdetails, httpprovider_1.Httpprovider, router_1.Router])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.js.map