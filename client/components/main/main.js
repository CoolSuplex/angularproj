System.register(['angular2/core', 'angular2/router', '../home/home', '../login/login', '../register/register', '../admin/admin', '../users/users'], function(exports_1, context_1) {
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
    var core_1, router_1, home_1, login_1, register_1, admin_1, users_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                    router_1.RouteConfig([
                        { path: '/home', component: home_1.HomeComponent, name: 'HomeCmp' },
                        { path: '/login', component: login_1.LoginComponent, name: 'LoginCmp' },
                        { path: '/register', component: register_1.RegisterComponent, name: 'RegCmp' },
                        { path: '/users/...', component: users_1.UsersComponent, name: 'UsersCmp' },
                        { path: '/admin/...', component: admin_1.AdminComponent, name: 'AdminCmp' }
                    ]),
                    core_1.Component({
                        selector: 'main-app',
                        template: " \n      <center><h1>Candidate</h1>\n      <a [routerLink]=\"['HomeCmp']\">Home</a> |\n      <a [routerLink]=\"['LoginCmp']\">Login / Logout</a> | \n      <a [routerLink]=\"['RegCmp']\">Register</a>\n      <hr><br>\n    <router-outlet></router-outlet></center>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=main.js.map