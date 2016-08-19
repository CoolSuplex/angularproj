import {Component, provide, OnInit} from 'angular2/core';
import {Router, RouteData, RouteParams} from 'angular2/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';
import {HTTP_PROVIDERS, Http, Response, Request,RequestMethod, Headers} from 'angular2/http';

@Component({
  selector: 'candidates',
  template: `<a href="" (click)="ChangePassword()" *ngIf="isuser">Change Password</a>
 <form (ngSubmit)="changePassword(userPassword)" *ngIf="changed">
      <input type="password" [(ngModel)]="userPassword" size="20" placeholder="password"><br><br>
      <input class="btn-primary" type="submit" value="Submit">
    </form>
<div>Candidates Component</div> 
  <table>
        <thead>
            <th>Candidate Username</th>
            <th>Candidate name</th>
            <th>Number</th>
            <th>Address</th>
            <th>Delete</th>
            <th>Edit</th>
            <th *ngIf="isadmin">Change Role</th>
        </thead>
        <tbody>
            <tr *ngFor="#candidate of candidates">
                <td>{{candidate.username}}</td> 
                <td>{{candidate.name}}</td>
                <td>{{candidate.number}}</td>
                <td>{{candidate.address}}</td>
                <td><a href="" (click)="delete(candidate)">Delete</a></td>
                <td><a href="" (click)="edit(candidate)">Edit</a></td>
                <td *ngIf="isadmin"><a href="" (click)="changerole(candidate)">Change Role</a></td>
            </tr>
        </tbody>
    </table>
      <table *ngIf="manage">
        <thead>
            <th>Candidate Username</th>
            <th>Candidate name</th>
            <th>Number</th>
            <th>Address</th>
        </thead>
        <tbody>
            <tr>            
                 <td>{{manageCandidate.username}}</td>
                 <td><input type="text" [(ngModel)]="manageCandidate.name" placeholder="Name"/></td>
                 <td><input type="text" [(ngModel)]="manageCandidate.number" placeholder="Number"/></td>
                 <td><input type="text" [(ngModel)]="manageCandidate.address" placeholder="Address"/></td>
                 <td><a href="" (click)="submitCandidate(manageCandidate)">Done</a></td>
            </tr>
        </tbody>
    </table>
    <table *ngIf="rolechange">
    <tr>
    Change role to 'user' or 'admin'
    <td>Current user role</td>
    <input type="text" [(ngModel)]="userrole" placeholder="user or admin"/>
    <td><a href="" (click)="makerolechange(userrole)">Done</a></td>
    </tr>
    </table>
  `,
  providers:[Http, HTTP_PROVIDERS,Httpprovider]
})
export class CandidatesComponent {

    public candidates: any[] = [];
    public manageCandidate = {};
    public userrole:String = "";
    public changeduser:String = "";
    public manage:Boolean = false;
    public isuser:Boolean = false;
    public isadmin:Boolean = false;
    public changed:Boolean = false;
    public rolechange:Boolean = false;
  constructor(private _userdetails: Userdetails, private _router: Router,  private _httpprovider: Httpprovider){
      if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
          this._router.navigate( ['/HomeCmp'] );
      }
  }
  
  delete(candidate){
    //console.log(candidate);
    let vari = this;
    if (vari._userdetails.usertypeDetails() === 'admin') {
        this._httpprovider.httpReq('http://localhost:9001/deletecandidate', 'POST', candidate, null).subscribe((data)=> {
            vari.candidates = data;
        });
    }
    if (vari._userdetails.usertypeDetails() === 'user') {
        this._httpprovider.httpReq('http://localhost:9001/deletecandidate', 'POST', candidate, null).subscribe((data)=> {
        });
        this._httpprovider.httpReq('http://localhost:9001/users/getCandidates', 'POST', {username:vari._userdetails.username}, null).subscribe((data)=> {
            for (let i = 0; i < data.length; i++) {
                vari.candidates = data;
            }
        });
    }
    return false;
}
    submitCandidate(candidate){
        //console.log(candidate);
        let vari = this;
            this._httpprovider.httpReq('http://localhost:9001/editcandidate', 'POST', candidate, null).subscribe((data)=> {
                console.log(data);
            });
        vari.manage=false;
        return false;
    }
    edit(candidate){
        //console.log(candidate);
        let vari = this;
        vari.manage=true;
        vari.manageCandidate = candidate;
        return false;
    }
    changePassword(userPassword) {
        let vari = this;
            this._httpprovider.httpReq('http://localhost:9001/changePassword', 'POST', {username:vari._userdetails.username , password:userPassword}, null).subscribe((data)=> {
                vari.changed = false;
            });
        return false;
    }
    makerolechange(userrole) {
        let vari = this;
        this._httpprovider.httpReq('http://localhost:9001/makerolechange', 'POST', {username:vari.changeduser, usertype:userrole}, null).subscribe((data)=> {
            vari.rolechange = false;
        });
        return false;
    }
    changerole(candidate) {
        let vari = this;
        vari.changeduser = candidate.username;
        vari.userrole = candidate.usertype;
        vari.rolechange = true;
        return false;
    }
    ChangePassword() {
        let vari = this;
        vari.changed = true;
        return false;
    }

  ngOnInit() {
      let vari = this;

      if (vari._userdetails.usertypeDetails() === 'admin') {
          vari.isadmin = true;
      this._httpprovider.httpReq('http://localhost:9001/admin/candidates', 'GET', null, null).subscribe((data)=> {
          for (let i = 0; i < data.length; i++) {
              vari.candidates.push(data[i]);
          }
      });
      }
      if (vari._userdetails.usertypeDetails() === 'user') {
          vari.isuser = true;
          this._httpprovider.httpReq('http://localhost:9001/users/getCandidates', 'POST', {username:vari._userdetails.username}, null).subscribe((data)=> {
              for (let i = 0; i < data.length; i++) {
                  vari.candidates.push(data[i]);
              }
          });
      }
    }
}