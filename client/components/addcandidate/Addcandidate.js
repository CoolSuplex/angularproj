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
    var AddcandidateComponent;
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
            AddcandidateComponent = (function () {
                function AddcandidateComponent(_userdetails, _router, _httpprovider) {
                    this._userdetails = _userdetails;
                    this._router = _router;
                    this._httpprovider = _httpprovider;
                    this.candidat = { username: null, name: null, age: null, qualification: null };
                    this.resCandidate = { username: null, name: null, age: null, qualification: null };
                    if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false) {
                        this._router.navigate(['/HomeCmp']);
                    }
                }
                AddcandidateComponent.prototype.submit = function (candidat) {
                    var _this = this;
                    var vari = this;
                    candidat.username = vari._userdetails.username;
                    this._httpprovider.httpReq('http://localhost:9001/addcandidate', 'POST', candidat, null).subscribe(function (data) {
                        console.log(data);
                        vari.resCandidate = data;
                        vari.candidat = { username: null, name: null, age: null, qualification: null };
                        _this._router.navigate(['CandidatesCmp']);
                    });
                };
                AddcandidateComponent = __decorate([
                    core_1.Component({
                        selector: 'addcandidate',
                        template: "<div>Add Candidates Component</div>\n  <center>\n    <form (ngSubmit)=\"submit(candidat)\">\n            <br>\n            <input type=\"text\" [(ngModel)]=\"candidat.name\" placeholder=\"Name\"/>\n            <br><br>\n            <input type=\"text\" [(ngModel)]=\"candidat.age\" placeholder=\"Age\"/>   \n            <br><br>\n            <input type=\"text\" [(ngModel)]=\"candidat.qualification\" placeholder=\"Qualification\"/>             \n            <br><br>\n            <button type=\"submit\">Submit</button>\n        </form>\n    <!--<div>Data Added: Name - {{resCandidate.name}}, Age - {{resCandidate.age}}, Qualification - {{resCandidate.qualification}}</div>-->\n    </center>\n  ",
                        providers: [http_1.Http, http_1.HTTP_PROVIDERS, httpprovider_1.Httpprovider]
                    }), 
                    __metadata('design:paramtypes', [userdetails_1.Userdetails, router_1.Router, httpprovider_1.Httpprovider])
                ], AddcandidateComponent);
                return AddcandidateComponent;
            }());
            exports_1("AddcandidateComponent", AddcandidateComponent);
        }
    }
});
//# sourceMappingURL=Addcandidate.js.map