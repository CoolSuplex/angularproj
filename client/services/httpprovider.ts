import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Response, Request,RequestMethod, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
//import 'rxjs/Rx';

@Injectable()
export class Httpprovider {
    cities: Response;
    http: Http;
    constructor(http: Http){
        this.http = http;
    }
    httpReq(url: string, method: string, data: any, header: Headers){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //console.log(headers);
        
        if (method === 'GET'){ var methods = RequestMethod.Get} 
        else if (method === 'POST'){ var methods = RequestMethod.Post}
        else if (method === 'PUT'){var methods = RequestMethod.Put}
        else if (method === 'PATCH'){var methods = RequestMethod.Patch} 
        else if (method === 'DELETE'){var methods = RequestMethod.Delete}
        else {methods = RequestMethod.Get};
        
        return this.http.request(new Request({
                    method: methods,
                    url: url,
                    body: JSON.stringify(data),
                    headers: headers
                })).map(res => res.json());
    }
    /*
    httpGetReq(url, options){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('./app/cities.json', headers).map(res => res.json());
    }
    httpPostReq(url, data, options){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post("/dashboard",JSON.stringify({ username: "", password: "" }),{method:'GET'}).map(res => res.json());
    }
    */

  
}