System.register(['angular2/platform/browser', '../client/components/main/main', '../client/services/userdetails', 'angular2/router', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, main_1, userdetails_1, router_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (userdetails_1_1) {
                userdetails_1 = userdetails_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(main_1.MainComponent, [userdetails_1.Userdetails, router_1.ROUTER_PROVIDERS, router_1.Location, router_1.ROUTER_BINDINGS, core_1.bind(router_1.APP_BASE_HREF).toValue('/')]);
        }
    }
});
//# sourceMappingURL=boot.js.map