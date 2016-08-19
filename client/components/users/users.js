System.register(['angular2/core', 'angular2/router', '../../services/userdetails', '../candidates/candidates', '../Addcandidate/Addcandidate'], function(exports_1, context_1) {
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
    var core_1, router_1, userdetails_1, candidates_1, Addcandidate_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (userdetails_1_1) {
                userdetails_1 = userdetails_1_1;
            },
            function (candidates_1_1) {
                candidates_1 = candidates_1_1;
            },
            function (Addcandidate_1_1) {
                Addcandidate_1 = Addcandidate_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userdetails, _router) {
                    this._userdetails = _userdetails;
                    this._router = _router;
                    if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false) {
                        this._router.navigate(['HomeCmp']);
                    }
                    if (this._userdetails.usertypeDetails() === 'admin') {
                        this._router.navigate(['AdminCmp']);
                    }
                }
                UsersComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/candidateDetails', component: candidates_1.CandidatesComponent, name: 'CandidatesCmp', useAsDefault: true },
                        { path: '/addCandidateDetails', component: Addcandidate_1.AddcandidateComponent, name: 'AddcandCmp' }
                    ]),
                    core_1.Component({
                        selector: 'users',
                        template: " \n      <center><h1>User Dashboard</h1>\n      <a [routerLink]=\"['./CandidatesCmp' ]\">Candidates</a> |\n      <a [routerLink]=\"['./AddcandCmp']\">Add Candidates</a> |   \n      <hr><br>\n    <router-outlet></router-outlet></center>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [userdetails_1.Userdetails, router_1.Router])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.js.map