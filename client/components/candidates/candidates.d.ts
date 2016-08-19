import { Router } from 'angular2/router';
import { Httpprovider } from '../../../client/services/httpprovider';
import { Userdetails } from '../../../client/services/userdetails';
export declare class CandidatesComponent {
    private _userdetails;
    private _router;
    private _httpprovider;
    candidates: any[];
    manageCandidate: {};
    userrole: String;
    changeduser: String;
    manage: Boolean;
    isuser: Boolean;
    isadmin: Boolean;
    changed: Boolean;
    rolechange: Boolean;
    constructor(_userdetails: Userdetails, _router: Router, _httpprovider: Httpprovider);
    delete(candidate: any): boolean;
    submitCandidate(candidate: any): boolean;
    edit(candidate: any): boolean;
    changePassword(userPassword: any): boolean;
    makerolechange(userrole: any): boolean;
    changerole(candidate: any): boolean;
    ChangePassword(): boolean;
    ngOnInit(): void;
}
