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
    var CandidatesComponent;
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
            CandidatesComponent = (function () {
                function CandidatesComponent(_userdetails, _router, _httpprovider) {
                    this._userdetails = _userdetails;
                    this._router = _router;
                    this._httpprovider = _httpprovider;
                    this.candidates = [];
                    this.manageCandidate = {};
                    this.userrole = "";
                    this.changeduser = "";
                    this.manage = false;
                    this.isuser = false;
                    this.isadmin = false;
                    this.changed = false;
                    this.rolechange = false;
                    if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false) {
                        this._router.navigate(['/HomeCmp']);
                    }
                }
                CandidatesComponent.prototype.delete = function (candidate) {
                    var vari = this;
                    if (vari._userdetails.usertypeDetails() === 'admin') {
                        this._httpprovider.httpReq('http://localhost:9001/deletecandidate', 'POST', candidate, null).subscribe(function (data) {
                            vari.candidates = data;
                        });
                    }
                    if (vari._userdetails.usertypeDetails() === 'user') {
                        this._httpprovider.httpReq('http://localhost:9001/deletecandidate', 'POST', candidate, null).subscribe(function (data) {
                        });
                        this._httpprovider.httpReq('http://localhost:9001/users/getCandidates', 'POST', { username: vari._userdetails.username }, null).subscribe(function (data) {
                            for (var i = 0; i < data.length; i++) {
                                vari.candidates = data;
                            }
                        });
                    }
                    return false;
                };
                CandidatesComponent.prototype.submitCandidate = function (candidate) {
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/editcandidate', 'POST', candidate, null).subscribe(function (data) {
                        console.log(data);
                    });
                    vari.manage = false;
                    return false;
                };
                CandidatesComponent.prototype.edit = function (candidate) {
                    var vari = this;
                    vari.manage = true;
                    vari.manageCandidate = candidate;
                    return false;
                };
                CandidatesComponent.prototype.changePassword = function (userPassword) {
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/changePassword', 'POST', { username: vari._userdetails.username, password: userPassword }, null).subscribe(function (data) {
                        vari.changed = false;
                    });
                    return false;
                };
                CandidatesComponent.prototype.makerolechange = function (userrole) {
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/makerolechange', 'POST', { username: vari.changeduser, usertype: userrole }, null).subscribe(function (data) {
                        vari.rolechange = false;
                    });
                    return false;
                };
                CandidatesComponent.prototype.changerole = function (candidate) {
                    var vari = this;
                    vari.changeduser = candidate.username;
                    vari.userrole = candidate.usertype;
                    vari.rolechange = true;
                    return false;
                };
                CandidatesComponent.prototype.ChangePassword = function () {
                    var vari = this;
                    vari.changed = true;
                    return false;
                };
                CandidatesComponent.prototype.ngOnInit = function () {
                    var vari = this;
                    if (vari._userdetails.usertypeDetails() === 'admin') {
                        vari.isadmin = true;
                        this._httpprovider.httpReq('http://localhost:9001/admin/candidates', 'GET', null, null).subscribe(function (data) {
                            for (var i = 0; i < data.length; i++) {
                                vari.candidates.push(data[i]);
                            }
                        });
                    }
                    if (vari._userdetails.usertypeDetails() === 'user') {
                        vari.isuser = true;
                        this._httpprovider.httpReq('http://localhost:9001/users/getCandidates', 'POST', { username: vari._userdetails.username }, null).subscribe(function (data) {
                            for (var i = 0; i < data.length; i++) {
                                vari.candidates.push(data[i]);
                            }
                        });
                    }
                };
                CandidatesComponent = __decorate([
                    core_1.Component({
                        selector: 'candidates',
                        template: "<a href=\"\" (click)=\"ChangePassword()\" *ngIf=\"isuser\">Change Password</a>\n <form (ngSubmit)=\"changePassword(userPassword)\" *ngIf=\"changed\">\n      <input type=\"password\" [(ngModel)]=\"userPassword\" size=\"20\" placeholder=\"password\"><br><br>\n      <input class=\"btn-primary\" type=\"submit\" value=\"Submit\">\n    </form>\n<div>Candidates Component</div> \n  <table>\n        <thead>\n            <th>Candidate Username</th>\n            <th>Candidate name</th>\n            <th>Number</th>\n            <th>Address</th>\n            <th>Delete</th>\n            <th>Edit</th>\n            <th *ngIf=\"isadmin\">Change Role</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#candidate of candidates\">\n                <td>{{candidate.username}}</td> \n                <td>{{candidate.name}}</td>\n                <td>{{candidate.number}}</td>\n                <td>{{candidate.address}}</td>\n                <td><a href=\"\" (click)=\"delete(candidate)\">Delete</a></td>\n                <td><a href=\"\" (click)=\"edit(candidate)\">Edit</a></td>\n                <td *ngIf=\"isadmin\"><a href=\"\" (click)=\"changerole(candidate)\">Change Role</a></td>\n            </tr>\n        </tbody>\n    </table>\n      <table *ngIf=\"manage\">\n        <thead>\n            <th>Candidate Username</th>\n            <th>Candidate name</th>\n            <th>Number</th>\n            <th>Address</th>\n        </thead>\n        <tbody>\n            <tr>            \n                 <td>{{manageCandidate.username}}</td>\n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.name\" placeholder=\"Name\"/></td>\n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.number\" placeholder=\"Number\"/></td>\n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.address\" placeholder=\"Address\"/></td>\n                 <td><a href=\"\" (click)=\"submitCandidate(manageCandidate)\">Done</a></td>\n            </tr>\n        </tbody>\n    </table>\n    <table *ngIf=\"rolechange\">\n    <tr>\n    Change role to 'user' or 'admin'\n    <td>Current user role</td>\n    <input type=\"text\" [(ngModel)]=\"userrole\" placeholder=\"user or admin\"/>\n    <td><a href=\"\" (click)=\"makerolechange(userrole)\">Done</a></td>\n    </tr>\n    </table>\n  ",
                        providers: [http_1.Http, http_1.HTTP_PROVIDERS, httpprovider_1.Httpprovider]
                    }), 
                    __metadata('design:paramtypes', [userdetails_1.Userdetails, router_1.Router, httpprovider_1.Httpprovider])
                ], CandidatesComponent);
                return CandidatesComponent;
            }());
            exports_1("CandidatesComponent", CandidatesComponent);
        }
    }
});
//# sourceMappingURL=candidates.js.map