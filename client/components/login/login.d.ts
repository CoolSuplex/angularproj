import { Router } from 'angular2/router';
import 'rxjs/add/operator/map';
import { Httpprovider } from '../../services/httpprovider';
import { Userdetails } from '../../services/userdetails';
export declare class LoginComponent {
    private _userdetails;
    private _httpprovider;
    private _router;
    user: any;
    constructor(_userdetails: Userdetails, _httpprovider: Httpprovider, _router: Router);
    login(user: any): void;
}
