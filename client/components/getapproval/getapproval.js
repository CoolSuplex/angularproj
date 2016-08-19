System.register(['angular2/core', 'angular2/router', '../../../client/services/httpprovider', '../../../client/services/userdetails', 'angular2/http'], function(exports_1, context_1) {
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
    var GetapprovalComponent;
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
            GetapprovalComponent = (function () {
                function GetapprovalComponent(_userdetails, _router, _httpprovider) {
                    this._userdetails = _userdetails;
                    this._router = _router;
                    this._httpprovider = _httpprovider;
                    this.user = { username: this._userdetails.username, approved: "not approved", name: null, age: null, identification: null };
                    this.approvalSent = null;
                    if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false) {
                        this._router.navigate(['/HomeCmp']);
                    }
                    if (this._userdetails.usertypeDetails() === 'admin') {
                        this._router.navigate(['AdminCmp']);
                    }
                }
                GetapprovalComponent.prototype.getapproval = function (user) {
                    var vari = this;
                    if (user.name !== null || user.age !== null || user.identification !== null) {
                        this._httpprovider.httpReq('http://localhost:9001/users/getapproval', 'POST', user, null).subscribe(function (data) {
                            console.log(data);
                            vari.approvalSent = "Approval request sent, waiting for approval";
                        });
                        user.username = vari._userdetails.username;
                        user.approved = "not approved";
                        user.name = null;
                        user.age = null;
                        user.identification = null;
                    }
                };
                GetapprovalComponent = __decorate([
                    core_1.Component({
                        selector: 'getapproval',
                        template: "<div>Get Approval Component</div>\n    <form (ngSubmit)=\"getapproval(user)\">\n      <input type=\"text\" [(ngModel)]=\"user.username\" size=\"20\" placeholder=\"username\" hidden>\n      <input type=\"text\" [(ngModel)]=\"user.approved\" size=\"20\" placeholder=\"approved\" hidden><br>\n      <input type=\"text\" [(ngModel)]=\"user.name\" size=\"20\" placeholder=\"full name\"><br><br>\n      <input type=\"number\" [(ngModel)]=\"user.age\" size=\"20\" placeholder=\"age\"><br><br>\n      <input type=\"text\" [(ngModel)]=\"user.identification\" size=\"20\" placeholder=\"identification\"><br><br>\n      <input class=\"btn-primary\" type=\"submit\" value=\"Submit\">\n      <br><br>{{approvalSent}}\n    </form>\n  \n  ",
                        providers: [http_1.Http, http_1.HTTP_PROVIDERS, httpprovider_1.Httpprovider]
                    }), 
                    __metadata('design:paramtypes', [userdetails_1.Userdetails, router_1.Router, httpprovider_1.Httpprovider])
                ], GetapprovalComponent);
                return GetapprovalComponent;
            }());
            exports_1("GetapprovalComponent", GetapprovalComponent);
        }
    }
});
//# sourceMappingURL=getapproval.js.map