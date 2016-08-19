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
    var ApproveComponent;
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
            ApproveComponent = (function () {
                function ApproveComponent(_userdetails, _router, _httpprovider) {
                    this._userdetails = _userdetails;
                    this._router = _router;
                    this._httpprovider = _httpprovider;
                    this.approvallist = [];
                    if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false) {
                        this._router.navigate(['/HomeCmp']);
                    }
                    if (this._userdetails.usertypeDetails() === 'user') {
                        this._router.navigate(['UsersCmp']);
                    }
                }
                ApproveComponent.prototype.approve = function (approval) {
                    var vari = this;
                    console.log(approval);
                    this._httpprovider.httpReq('http://localhost:9001/admin/approvevoter', 'POST', approval, null).subscribe(function (data) {
                        if (data !== "Approval not in list") {
                            for (var n = 0; n < vari.approvallist.length; n++) {
                                if (vari.approvallist[n]._id === approval._id) {
                                    var removedObject = vari.approvallist.splice(n, 1);
                                    removedObject = null;
                                    break;
                                }
                            }
                        }
                    });
                    return false;
                };
                ApproveComponent.prototype.reject = function (approval) {
                    var vari = this;
                    console.log(approval);
                    this._httpprovider.httpReq('http://localhost:9001/admin/rejectvoter', 'POST', approval, null).subscribe(function (data) {
                        if (data !== "Approval not in list") {
                            for (var n = 0; n < vari.approvallist.length; n++) {
                                if (vari.approvallist[n]._id === approval._id) {
                                    var removedObject = vari.approvallist.splice(n, 1);
                                    removedObject = null;
                                    break;
                                }
                            }
                        }
                    });
                    return false;
                };
                ApproveComponent.prototype.ngOnInit = function () {
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/admin/approvallist', 'GET', null, null).subscribe(function (data) {
                        for (var i = 0; i < data.length; i++) {
                            vari.approvallist.push(data[i]);
                            console.log(vari.approvallist);
                        }
                    });
                };
                ApproveComponent = __decorate([
                    core_1.Component({
                        selector: 'approve',
                        template: "<div>Approve Component</div>\n    <table>\n        <thead>\n            <th>Username</th>\n            <th>Name</th>\n            <th>Age</th>\n            <th>Identification</th>\n            <th>Approved?</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#approval of approvallist\">\n                <td>{{approval.username}}</td>\n                <td>{{approval.name}}</td>\n                <td>{{approval.age}}</td>\n                <td>{{approval.identification}}</td>\n                <td>{{approval.approved}}</td>\n                <td><a href=\"\" (click)=\"approve(approval)\">Approve</a></td>\n                <td><a href=\"\" (click)=\"reject(approval)\">Reject</a></td>                \n            </tr>\n        </tbody>\n    </table>\n  ",
                        providers: [http_1.Http, http_1.HTTP_PROVIDERS, httpprovider_1.Httpprovider]
                    }), 
                    __metadata('design:paramtypes', [userdetails_1.Userdetails, router_1.Router, httpprovider_1.Httpprovider])
                ], ApproveComponent);
                return ApproveComponent;
            }());
            exports_1("ApproveComponent", ApproveComponent);
        }
    }
});
//# sourceMappingURL=approve.js.map