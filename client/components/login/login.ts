import {Component, provide} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES, RouterLink, ROUTER_PROVIDERS, RouteConfig, RouteData, RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, Response, Request,RequestMethod, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Httpprovider} from '../../services/httpprovider';
import {Userdetails} from '../../services/userdetails';

@Component({
  selector: 'login',
  template: `
  <center>
  <div>Login</div><br>
    <form (ngSubmit)="login(user)">
      <input type="text" [(ngModel)]="user.username" size="20" placeholder="username"><br><br>
      <input type="password" [(ngModel)]="user.password" size="20" placeholder="password"><br><br>
      <input class="btn-primary" type="submit" value="Submit">
    </form>
  </center>
  `,
   providers:[Http, HTTP_PROVIDERS,Httpprovider]
})
export class LoginComponent {
  public user: any = {username:"",password:""};
  constructor(private _userdetails: Userdetails, private _httpprovider: Httpprovider, private _router: Router){
      if((this._userdetails.isLoggedin()) || (this._userdetails.usertypeDetails() !== null)){
          if(this._userdetails.usertypeDetails() === "user" ||this._userdetails.usertypeDetails() === "admin"){
                this._userdetails.resetDetails();
                this._router.navigate( ['HomeCmp'] );
          }
      }
  } 
  login(user){
      this._httpprovider.httpReq('http://127.0.0.1:9001/userlogin','POST',{username:user.username, password:user.password},null).subscribe((data)=>{                     
            let vari = this;
            if (data.username !== null || data.username !== undefined || data.usertype !== null || data.usertype !== undefined){
                vari._userdetails.setDetails(data);
                if (vari._userdetails.usertypeDetails() === 'admin'){vari._router.navigate( ['AdminCmp'] );}
                else if (vari._userdetails.usertypeDetails() === 'user'){vari._router.navigate( ['UsersCmp'] );}
                else{console.log("Error Occurred during Login.");}
                
            }else {
                console.log("Error Occurred during Login. No username or usertype present.");
            }
            
        });
  }
}