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
  selector: 'admin',
  template:` 
      <center><h1>Admin Dashboard</h1>
      <a [routerLink]="['./CandidatesCmp' ]">Contacts</a> |
      <a [routerLink]="['./AddcandCmp']">Add Contacts</a> |   
      <hr><br>
    <router-outlet></router-outlet></center>
  `,
  directives: [ROUTER_DIRECTIVES, RouterLink]
})

export class AdminComponent{
    constructor(private _userdetails: Userdetails, private _router: Router){
      if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
          this._router.navigate( ['HomeCmp'] );
      }
      if(this._userdetails.usertypeDetails() === 'user'){
          this._router.navigate(['UsersCmp']);
      }
  }
}
