import { Router } from 'angular2/router';
import { Httpprovider } from '../../../client/services/httpprovider';
import { Userdetails } from '../../../client/services/userdetails';
export declare class ResultsComponent {
    private _userdetails;
    private _router;
    private _httpprovider;
    votecount: any[];
    a: any;
    constructor(_userdetails: Userdetails, _router: Router, _httpprovider: Httpprovider);
    ngOnInit(): void;
}
