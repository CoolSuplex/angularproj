import { Router } from 'angular2/router';
import { Httpprovider } from '../../../client/services/httpprovider';
import { Userdetails } from '../../../client/services/userdetails';
export declare class AddcandidateComponent {
    private _userdetails;
    private _router;
    private _httpprovider;
    candidat: {
        name: any;
        age: any;
        qualification: any;
    };
    resCandidate: {
        name: any;
        age: any;
        qualification: any;
    };
    constructor(_userdetails: Userdetails, _router: Router, _httpprovider: Httpprovider);
    submit(candidat: any): void;
}
