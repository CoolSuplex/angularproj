import { Router } from 'angular2/router';
import { Httpprovider } from '../../../client/services/httpprovider';
import { Userdetails } from '../../../client/services/userdetails';
export declare class ApproveComponent {
    private _userdetails;
    private _router;
    private _httpprovider;
    approvallist: any[];
    constructor(_userdetails: Userdetails, _router: Router, _httpprovider: Httpprovider);
    approve(approval: any): boolean;
    reject(approval: any): boolean;
    ngOnInit(): void;
}
