var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("services/httpprovider", ['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1;
    var Httpprovider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Httpprovider = (function () {
                function Httpprovider(http) {
                    this.http = http;
                }
                Httpprovider.prototype.httpReq = function (url, method, data, header) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    console.log(headers);
                    if (method === 'GET') {
                        var methods = http_1.RequestMethod.Get;
                    }
                    else if (method === 'POST') {
                        var methods = http_1.RequestMethod.Post;
                    }
                    else if (method === 'PUT') {
                        var methods = http_1.RequestMethod.Put;
                    }
                    else if (method === 'PATCH') {
                        var methods = http_1.RequestMethod.Patch;
                    }
                    else if (method === 'DELETE') {
                        var methods = http_1.RequestMethod.Delete;
                    }
                    else {
                        methods = http_1.RequestMethod.Get;
                    }
                    ;
                    return this.http.request(new http_1.Request({
                        method: methods,
                        url: url,
                        body: JSON.stringify(data),
                        headers: headers
                    })).map(function (res) { return res.json(); });
                };
                Httpprovider = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Httpprovider);
                return Httpprovider;
            }());
            exports_1("Httpprovider", Httpprovider);
        }
    }
});
System.register("services/userdetails", ['angular2/core'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2;
    var Userdetails;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            Userdetails = (function () {
                function Userdetails() {
                    this.username = null;
                    this.password = null;
                    this.usertype = null;
                    this.approved = null;
                    this.loggedin = false;
                }
                Userdetails.prototype.isLoggedin = function () {
                    return this.loggedin;
                };
                Userdetails.prototype.isApproved = function () {
                    return this.approved;
                };
                Userdetails.prototype.usertypeDetails = function () {
                    return this.usertype;
                };
                Userdetails.prototype.hasUsername = function () {
                    return this.username;
                };
                Userdetails.prototype.getUserdetails = function () {
                    return { username: this.username, password: this.password, usertype: this.usertype, approved: this.approved, loggedin: this.loggedin };
                };
                Userdetails.prototype.resetDetails = function () {
                    this.username = null;
                    this.password = null;
                    this.usertype = null;
                    this.approved = null;
                    this.loggedin = false;
                };
                Userdetails.prototype.setDetails = function (data) {
                    this.username = data.username;
                    this.password = null;
                    this.usertype = data.usertype;
                    this.approved = data.approved;
                    this.loggedin = true;
                };
                Userdetails = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Userdetails);
                return Userdetails;
            }());
            exports_2("Userdetails", Userdetails);
        }
    }
});
System.register("components/home/home", ['angular2/core', 'angular2/router', "services/userdetails"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3, router_1, userdetails_1;
    var HomeComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (userdetails_1_1) {
                userdetails_1 = userdetails_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_userdetails, _router) {
                    this._userdetails = _userdetails;
                    this._router = _router;
                    this._userdetails.resetDetails();
                    this._router.navigate(['LoginCmp']);
                }
                HomeComponent = __decorate([
                    core_3.Component({
                        selector: 'home',
                        template: "<div>Home Component</div>",
                    }), 
                    __metadata('design:paramtypes', [userdetails_1.Userdetails, router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_3("HomeComponent", HomeComponent);
        }
    }
});
System.register("components/login/login", ['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/add/operator/map', "services/httpprovider", "services/userdetails"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_4, router_2, http_2, httpprovider_1, userdetails_2;
    var LoginComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (_2) {},
            function (httpprovider_1_1) {
                httpprovider_1 = httpprovider_1_1;
            },
            function (userdetails_2_1) {
                userdetails_2 = userdetails_2_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_userdetails, _httpprovider, _router) {
                    this._userdetails = _userdetails;
                    this._httpprovider = _httpprovider;
                    this._router = _router;
                    this.user = { username: "", password: "" };
                    if ((this._userdetails.isLoggedin()) || (this._userdetails.usertypeDetails() !== null)) {
                        if (this._userdetails.usertypeDetails() === "user" || this._userdetails.usertypeDetails() === "admin") {
                            this._userdetails.resetDetails();
                            this._router.navigate(['HomeCmp']);
                        }
                    }
                }
                LoginComponent.prototype.login = function (user) {
                    var _this = this;
                    this._httpprovider.httpReq('http://127.0.0.1:9001/userlogin', 'POST', { username: user.username, password: user.password }, null).subscribe(function (data) {
                        if (data.username !== null || data.username !== undefined || data.usertype !== null || data.usertype !== undefined) {
                            _this._userdetails.setDetails(data);
                            console.log(data);
                            if (_this._userdetails.usertypeDetails() === 'admin') {
                                _this._router.navigate(['AdminCmp']);
                            }
                            else if (_this._userdetails.usertypeDetails() === 'user') {
                                _this._router.navigate(['UsersCmp']);
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
                LoginComponent = __decorate([
                    core_4.Component({
                        selector: 'login',
                        template: "\n  <center>\n  <div>Login</div><br>\n    <form (ngSubmit)=\"login(user)\">\n      <input type=\"text\" [(ngModel)]=\"user.username\" size=\"20\" placeholder=\"username\"><br><br>\n      <input type=\"password\" [(ngModel)]=\"user.password\" size=\"20\" placeholder=\"password\"><br><br>\n      <input class=\"btn-primary\" type=\"submit\" value=\"Submit\">\n    </form>\n  </center>\n  ",
                        providers: [http_2.Http, http_2.HTTP_PROVIDERS, httpprovider_1.Httpprovider]
                    }), 
                    __metadata('design:paramtypes', [userdetails_2.Userdetails, httpprovider_1.Httpprovider, router_2.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_4("LoginComponent", LoginComponent);
        }
    }
});
System.register("components/register/register", ['angular2/core', "services/userdetails"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_5, userdetails_3;
    var RegisterComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (userdetails_3_1) {
                userdetails_3 = userdetails_3_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(_userdetails) {
                    this._userdetails = _userdetails;
                    this._userdetails.resetDetails();
                }
                RegisterComponent = __decorate([
                    core_5.Component({
                        selector: 'register',
                        template: "\n  <center>\n  <div>Register</div><br>\n    <form (ngSubmit)=\"register()\">    \n      <input type=\"text\" [(ngModel)]=\"username\" size=\"20\" placeholder=\"new username\"><br><br>\n      <input type=\"password\" [(ngModel)]=\"password\" size=\"20\" placeholder=\"new password\"><br><br>\n      <input class=\"btn-primary\" type=\"submit\" value=\"Register\">\n    </form>\n  </center>\n  ",
                    }), 
                    __metadata('design:paramtypes', [userdetails_3.Userdetails])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_5("RegisterComponent", RegisterComponent);
        }
    }
});
System.register("components/approve/approve", ['angular2/core'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_6;
    var ApproveComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            ApproveComponent = (function () {
                function ApproveComponent() {
                }
                ApproveComponent = __decorate([
                    core_6.Component({
                        selector: 'approve',
                        template: "<div>Approve Component</div>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ApproveComponent);
                return ApproveComponent;
            }());
            exports_6("ApproveComponent", ApproveComponent);
        }
    }
});
System.register("components/candidates/candidates", ['angular2/core'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_7;
    var CandidatesComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            }],
        execute: function() {
            CandidatesComponent = (function () {
                function CandidatesComponent() {
                }
                CandidatesComponent = __decorate([
                    core_7.Component({
                        selector: 'candidates',
                        template: "<div>Candidates Component</div>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], CandidatesComponent);
                return CandidatesComponent;
            }());
            exports_7("CandidatesComponent", CandidatesComponent);
        }
    }
});
System.register("components/results/results", ['angular2/core'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_8;
    var ResultsComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            }],
        execute: function() {
            ResultsComponent = (function () {
                function ResultsComponent() {
                }
                ResultsComponent = __decorate([
                    core_8.Component({
                        selector: 'results',
                        template: "<div>Results Component</div>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ResultsComponent);
                return ResultsComponent;
            }());
            exports_8("ResultsComponent", ResultsComponent);
        }
    }
});
System.register("components/admin/admin", ['angular2/core', 'angular2/router', "services/userdetails", "components/approve/approve", "components/candidates/candidates", "components/results/results"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_9, router_3, userdetails_4, approve_1, candidates_1, results_1;
    var AdminComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (userdetails_4_1) {
                userdetails_4 = userdetails_4_1;
            },
            function (approve_1_1) {
                approve_1 = approve_1_1;
            },
            function (candidates_1_1) {
                candidates_1 = candidates_1_1;
            },
            function (results_1_1) {
                results_1 = results_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent(_userdetails, _router) {
                    this._userdetails = _userdetails;
                    this._router = _router;
                    if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false) {
                        this._router.navigate(['HomeCmp']);
                    }
                    if (this._userdetails.usertypeDetails() === 'user') {
                        this._router.navigate(['UsersCmp']);
                    }
                }
                AdminComponent = __decorate([
                    router_3.RouteConfig([
                        { path: '/approve', component: approve_1.ApproveComponent, name: 'ApproveCmp', useAsDefault: true },
                        { path: '/getapproval', component: candidates_1.CandidatesComponent, name: 'CandidatesCmp' },
                        { path: '/userresults', component: results_1.ResultsComponent, name: 'AdminResultsCmp' }
                    ]),
                    core_9.Component({
                        selector: 'admin',
                        template: " \n      <center><h1>Admin Dashboard</h1>\n      <a [routerLink]=\"['./ApproveCmp']\">Approvals</a> |\n      <a [routerLink]=\"['./CandidatesCmp']\">Candidates</a> | \n      <a [routerLink]=\"['./AdminResultsCmp']\">Admin Results</a>\n      <hr><br>\n    <router-outlet></router-outlet></center>\n  ",
                        directives: [router_3.ROUTER_DIRECTIVES, router_3.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [userdetails_4.Userdetails, router_3.Router])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_9("AdminComponent", AdminComponent);
        }
    }
});
System.register("components/vote/vote", ['angular2/core'], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_10;
    var VoteComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                }
                VoteComponent = __decorate([
                    core_10.Component({
                        selector: 'vote',
                        template: "<div>Vote Component</div>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_10("VoteComponent", VoteComponent);
        }
    }
});
System.register("components/getapproval/getapproval", ['angular2/core'], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_11;
    var GetapprovalComponent;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            }],
        execute: function() {
            GetapprovalComponent = (function () {
                function GetapprovalComponent() {
                }
                GetapprovalComponent = __decorate([
                    core_11.Component({
                        selector: 'getapproval',
                        template: "<div>Get Approval Component</div>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], GetapprovalComponent);
                return GetapprovalComponent;
            }());
            exports_11("GetapprovalComponent", GetapprovalComponent);
        }
    }
});
System.register("components/users/users", ['angular2/core', 'angular2/router', "services/userdetails", "components/vote/vote", "components/getapproval/getapproval", "components/results/results"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_12, router_4, userdetails_5, vote_1, getapproval_1, results_2;
    var UsersComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (userdetails_5_1) {
                userdetails_5 = userdetails_5_1;
            },
            function (vote_1_1) {
                vote_1 = vote_1_1;
            },
            function (getapproval_1_1) {
                getapproval_1 = getapproval_1_1;
            },
            function (results_2_1) {
                results_2 = results_2_1;
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
                    router_4.RouteConfig([
                        { path: '/vote', component: vote_1.VoteComponent, name: 'VoteCmp', useAsDefault: true },
                        { path: '/getapproval', component: getapproval_1.GetapprovalComponent, name: 'GetapprovalCmp' },
                        { path: '/userresults', component: results_2.ResultsComponent, name: 'UserresultsCmp' }
                    ]),
                    core_12.Component({
                        selector: 'users',
                        template: " \n      <center><h1>Users Dashboard</h1>\n      <a [routerLink]=\"['./VoteCmp']\">Vote</a> |\n      <a [routerLink]=\"['./GetapprovalCmp']\">Get Approval</a> | \n      <a [routerLink]=\"['./UserresultsCmp']\">Results</a>\n      <hr><br>\n    <router-outlet></router-outlet></center>\n  ",
                        directives: [router_4.ROUTER_DIRECTIVES, router_4.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [userdetails_5.Userdetails, router_4.Router])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_12("UsersComponent", UsersComponent);
        }
    }
});
System.register("components/main/main", ['angular2/core', 'angular2/router', "components/home/home", "components/login/login", "components/register/register", "components/admin/admin", "components/users/users"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_13, router_5, home_1, login_1, register_1, admin_1, users_1;
    var MainComponent;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (register_1_1) {
                register_1 = register_1_1;
            },
            function (admin_1_1) {
                admin_1 = admin_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    router_5.RouteConfig([
                        { path: '/home', component: home_1.HomeComponent, name: 'HomeCmp' },
                        { path: '/login', component: login_1.LoginComponent, name: 'LoginCmp' },
                        { path: '/register', component: register_1.RegisterComponent, name: 'RegCmp' },
                        { path: '/users/...', component: users_1.UsersComponent, name: 'UsersCmp' },
                        { path: '/admin/...', component: admin_1.AdminComponent, name: 'AdminCmp' }
                    ]),
                    core_13.Component({
                        selector: 'main-app',
                        template: " \n      <center><h1>Electronic Voting System - Sample Project</h1>\n      <a [routerLink]=\"['HomeCmp']\">Home</a> |\n      <a [routerLink]=\"['LoginCmp']\">Login / Logout</a> | \n      <a [routerLink]=\"['RegCmp']\">Register</a>\n      <hr><br>\n    <router-outlet></router-outlet></center>\n  ",
                        directives: [router_5.ROUTER_DIRECTIVES, router_5.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_13("MainComponent", MainComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "components/main/main", "services/userdetails", 'angular2/router', 'angular2/core'], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var browser_1, main_1, userdetails_6, router_6, core_14;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (userdetails_6_1) {
                userdetails_6 = userdetails_6_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            },
            function (core_14_1) {
                core_14 = core_14_1;
            }],
        execute: function() {
            core_14.enableProdMode();
            browser_1.bootstrap(main_1.MainComponent, [userdetails_6.Userdetails, router_6.ROUTER_PROVIDERS, router_6.Location, router_6.ROUTER_BINDINGS, core_14.bind(router_6.APP_BASE_HREF).toValue('/')]);
        }
    }
});
//# sourceMappingURL=all.js.map