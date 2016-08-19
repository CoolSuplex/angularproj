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
    var VoteComponent;
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
            VoteComponent = (function () {
                function VoteComponent(_userdetails, _router, _httpprovider) {
                    this._userdetails = _userdetails;
                    this._router = _router;
                    this._httpprovider = _httpprovider;
                    this.candidates = [];
                    this.votedfor = { candidateid: null, candidatename: null };
                    if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false) {
                        this._router.navigate(['/HomeCmp']);
                    }
                    if (this._userdetails.usertypeDetails() === 'admin') {
                        this._router.navigate(['AdminCmp']);
                    }
                }
                VoteComponent.prototype.vote = function (data) {
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/users/vote', 'POST', data, null).subscribe(function (data) {
                        if (vari.votedfor.candidateid === null) {
                            vari.votedfor = { candidateid: data.candidateid, candidatename: data.candidatename };
                        }
                        else {
                            console.log("Already voted. Cannot vote again");
                        }
                    });
                    return false;
                };
                VoteComponent.prototype.ngOnInit = function () {
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/users/candidates', 'GET', null, null).subscribe(function (data) {
                        for (var i = 0; i < data.length; i++) {
                            vari.candidates.push(data[i]);
                        }
                    });
                    this._httpprovider.httpReq('http://localhost:9001/users/votedfor', 'POST', { username: this._userdetails.hasUsername() }, null).subscribe(function (data) {
                        vari.votedfor = { candidateid: data.candidateid, candidatename: data.candidatename };
                    });
                };
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "<div>Vote Component</div>\n  <div>\n    <table>\n        <thead>\n            <th>Candidate name</th>\n            <th>Age</th>\n            <th>Qualifications</th>\n            <th>Vote</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#candidate of candidates\">\n                <td>{{candidate.name}}</td>\n                <td>{{candidate.age}}</td>\n                <td>{{candidate.qualification}}</td>\n                <td><a href=\"\" style=\"text-decoration: underline;\" (click)=\"vote({candidateid: candidate._id, candidatename: candidate.name,username: _userdetails.username, userid: _userdetails.userid})\">Vote</a></td>\n            </tr>\n        </tbody>\n    </table>\n    <div>You voted for {{votedfor.candidateid}} - {{votedfor.candidatename}}</div>\n</div>\n",
                        providers: [http_1.Http, http_1.HTTP_PROVIDERS, httpprovider_1.Httpprovider]
                    }), 
                    __metadata('design:paramtypes', [userdetails_1.Userdetails, router_1.Router, httpprovider_1.Httpprovider])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.js.map