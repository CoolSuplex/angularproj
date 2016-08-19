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
    var ResultsComponent;
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
            ResultsComponent = (function () {
                function ResultsComponent(_userdetails, _router, _httpprovider) {
                    this._userdetails = _userdetails;
                    this._router = _router;
                    this._httpprovider = _httpprovider;
                    this.votecount = [];
                    if ((this._userdetails.usertypeDetails() === "") || (this._userdetails.isLoggedin() === false)) {
                        this._userdetails.resetDetails();
                        this._router.navigate(['/HomeCmp']);
                    }
                }
                ResultsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/users/results', 'GET', null, null).subscribe(function (data) {
                        console.log(data);
                        var a = _this._userdetails.returnArray(data);
                        vari.votecount = a;
                        vari.a = Object.keys(a).map(function (key) { return key; });
                    });
                };
                ResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'results',
                        template: "<div>Results Component</div>\n  <table>\n        <thead>\n            <th>Candidate Name</th>\n            <th>Total Votes</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#value of a\">\n            <td>{{value}}</td> \n            <td>{{votecount[value]}}</td>\n            <tr>\n        </tbody>\n    </table>\n  \n  ",
                        providers: [http_1.Http, http_1.HTTP_PROVIDERS, httpprovider_1.Httpprovider]
                    }), 
                    __metadata('design:paramtypes', [userdetails_1.Userdetails, router_1.Router, httpprovider_1.Httpprovider])
                ], ResultsComponent);
                return ResultsComponent;
            }());
            exports_1("ResultsComponent", ResultsComponent);
        }
    }
});
//# sourceMappingURL=results.js.map