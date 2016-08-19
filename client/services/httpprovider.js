System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
//# sourceMappingURL=httpprovider.js.map