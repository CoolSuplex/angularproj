import { Router } from 'angular2/router';
import { Httpprovider } from '../../../client/services/httpprovider';
import { Userdetails } from '../../../client/services/userdetails';
export declare class CandidatesComponent {
    private _userdetails;
    private _router;
    private _httpprovider;
    candidates: any[];
    manageCandidate: {};
    manage: Boolean;
    isuser: Boolean;
    changed: Boolean;
    constructor(_userdetails: Userdetails, _router: Router, _httpprovider: Httpprovider);
    delete(candidate: any): boolean;
    submitCandidate(candidate: any): boolean;
    edit(candidate: any): boolean;
    changePassword(userPassword: any): boolean;
    ChangePassword(): boolean;
    ngOnInit(): void;
}
