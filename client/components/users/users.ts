import {Component, provide} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES, RouterLink, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {Httpprovider} from '../../services/httpprovider';
import {Userdetails} from '../../services/userdetails';
import {CandidatesComponent} from '../candidates/candidates';
import {AddcandidateComponent} from '../Addcandidate/Addcandidate';

@RouteConfig([
    {path: '/candidateDetails', component: CandidatesComponent, name: 'CandidatesCmp', useAsDefault: true },
    {path: '/addCandidateDetails', component: AddcandidateComponent, name: 'AddcandCmp' }
])

@Component({
    selector: 'users',
    template:` 
      <center><h1>User Dashboard</h1>
      <a [routerLink]="['./CandidatesCmp' ]">Candidates</a> |
      <a [routerLink]="['./AddcandCmp']">Add Candidates</a> |   
      <hr><br>
    <router-outlet></router-outlet></center>
  `,
    directives: [ROUTER_DIRECTIVES, RouterLink]
})

export class UsersComponent{

    constructor(private _userdetails: Userdetails, private _router: Router){
        if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
            this._router.navigate( ['HomeCmp'] );
        }
        if(this._userdetails.usertypeDetails() === 'admin'){
            this._router.navigate(['AdminCmp']);
        }
    }
}
