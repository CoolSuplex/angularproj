import {Component, provide, OnInit} from 'angular2/core';
import {Router, RouteData, RouteParams} from 'angular2/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';
import {HTTP_PROVIDERS, Http, Response, Request,RequestMethod, Headers} from 'angular2/http';

@Component({
  selector: 'addcandidate',
  template: `<div>Add Candidates Component</div>
  <center>
    <form (ngSubmit)="submit(candidat)">
            <br>
            <input type="text" [(ngModel)]="candidat.name" placeholder="Name"/>
            <br><br>
            <input type="text" [(ngModel)]="candidat.number" placeholder="Number"/>   
            <br><br>
            <input type="text" [(ngModel)]="candidat.address" placeholder="Address"/>             
            <br><br>
            <button type="submit">Submit</button>
        </form>
        </center>
  `,
  providers:[Http, HTTP_PROVIDERS,Httpprovider]
})
export class AddcandidateComponent {
    
    public candidat = {username:null, usertype:null, name: null, number: null, address: null};
    public resCandidate =  {username:null, usertype:null, name: null, number: null, address: null};
  constructor(private _userdetails: Userdetails, private _router: Router,  private _httpprovider: Httpprovider){
      if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
          this._router.navigate( ['/HomeCmp'] );
      }
  }

  
  submit(candidat){
      let vari = this;
      candidat.username = vari._userdetails.username;
      candidat.usertype = vari._userdetails.usertype;
      this._httpprovider.httpReq('http://localhost:9001/addcandidate','POST',candidat,null).subscribe((data)=>{
            console.log(data);
            vari.resCandidate = data;
            vari.candidat = {username:null, usertype:null, name: null, number: null, address: null};
            this._router.navigate( ['CandidatesCmp'] );
      });
  }
  
}