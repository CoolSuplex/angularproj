import {Component, provide} from 'angular2/core';
import {Router, RouteData, RouteParams} from 'angular2/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';

@Component({
  selector: 'home',
  template: `<div>Home Component</div>`,
})
export class HomeComponent {
  constructor(private _userdetails: Userdetails, private _router: Router){
      this._userdetails.resetDetails();
      this._router.navigate( ['LoginCmp'] );
  }
}