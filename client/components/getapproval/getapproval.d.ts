import { Router } from 'angular2/router';
import { Httpprovider } from '../../../client/services/httpprovider';
import { Userdetails } from '../../../client/services/userdetails';
export declare class GetapprovalComponent {
    private _userdetails;
    private _router;
    private _httpprovider;
    user: any;
    approvalSent: string;
    constructor(_userdetails: Userdetails, _router: Router, _httpprovider: Httpprovider);
    getapproval(user: any): void;
}
