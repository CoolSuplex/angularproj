import {Component, provide} from 'angular2/core';
import {Router, RouteData, RouteParams} from 'angular2/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';
import {HTTP_PROVIDERS, Http, Response, Request,RequestMethod, Headers} from 'angular2/http';

@Component({
  selector: 'getapproval',
  template: `<div>Get Approval Component</div>
    <form (ngSubmit)="getapproval(user)">
      <input type="text" [(ngModel)]="user.username" size="20" placeholder="username" hidden>
      <input type="text" [(ngModel)]="user.approved" size="20" placeholder="approved" hidden><br>
      <input type="text" [(ngModel)]="user.name" size="20" placeholder="full name"><br><br>
      <input type="number" [(ngModel)]="user.age" size="20" placeholder="age"><br><br>
      <input type="text" [(ngModel)]="user.identification" size="20" placeholder="identification"><br><br>
      <input class="btn-primary" type="submit" value="Submit">
      <br><br>{{approvalSent}}
    </form>
  
  `,
   providers:[Http, HTTP_PROVIDERS,Httpprovider]
})
export class GetapprovalComponent {
  public user: any = {username:this._userdetails.username,approved:"not approved", name:null,age:null,identification:null};
  public approvalSent: string = null;
    constructor(private _userdetails: Userdetails, private _router: Router,  private _httpprovider: Httpprovider){
        if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
            this._router.navigate( ['/HomeCmp'] );
        }
        if(this._userdetails.usertypeDetails() === 'admin'){
            this._router.navigate( ['AdminCmp'] );
        }

    }
    getapproval(user){
        let vari = this;
        if (user.name!==null || user.age!==null || user.identification!==null){
            this._httpprovider.httpReq('http://localhost:9001/users/getapproval','POST',user,null).subscribe((data)=>{
            console.log(data);
            vari.approvalSent = "Approval request sent, waiting for approval";
            });
            user.username = vari._userdetails.username;
            user.approved="not approved";
            user.name=null;
            user.age=null;
            user.identification=null;
        }
    }
}