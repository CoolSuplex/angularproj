import { Router } from 'angular2/router';
import { Httpprovider } from '../../../client/services/httpprovider';
import { Userdetails } from '../../../client/services/userdetails';
export declare class VoteComponent {
    private _userdetails;
    private _router;
    private _httpprovider;
    candidates: any[];
    votedfor: any;
    constructor(_userdetails: Userdetails, _router: Router, _httpprovider: Httpprovider);
    vote(data: any): boolean;
    ngOnInit(): void;
}
