import {Component, provide, OnInit} from 'angular2/core';
import {Router, RouteData, RouteParams} from 'angular2/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';
import {HTTP_PROVIDERS, Http, Response, Request,RequestMethod, Headers} from 'angular2/http';

@Component({
  selector: 'vote',
  template: `<div>Vote Component</div>
  <div>
    <table>
        <thead>
            <th>Candidate name</th>
            <th>Age</th>
            <th>Qualifications</th>
            <th>Vote</th>
        </thead>
        <tbody>
            <tr *ngFor="#candidate of candidates">
                <td>{{candidate.name}}</td>
                <td>{{candidate.age}}</td>
                <td>{{candidate.qualification}}</td>
                <td><a href="" style="text-decoration: underline;" (click)="vote({candidateid: candidate._id, candidatename: candidate.name,username: _userdetails.username, userid: _userdetails.userid})">Vote</a></td>
            </tr>
        </tbody>
    </table>
    <div>You voted for {{votedfor.candidateid}} - {{votedfor.candidatename}}</div>
</div>
`,
  providers:[Http, HTTP_PROVIDERS,Httpprovider]
})
export class VoteComponent {
    public candidates: any[]=[];
    public votedfor: any = {candidateid: null, candidatename: null};
    constructor(private _userdetails: Userdetails, private _router: Router,  private _httpprovider: Httpprovider){
        if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
            this._router.navigate( ['/HomeCmp'] );
        }
        if(this._userdetails.usertypeDetails() === 'admin'){
            this._router.navigate( ['AdminCmp'] );
        }
        
    }
    vote(data){
        let vari = this;
        
        this._httpprovider.httpReq('http://localhost:9001/users/vote','POST',data,null).subscribe((data)=>{
            //console.log(data);
            if (vari.votedfor.candidateid === null ){
                vari.votedfor = {candidateid: data.candidateid,candidatename:data.candidatename};
            }else{
                console.log("Already voted. Cannot vote again");
            }
        });
        return false;
    }
    ngOnInit(){
        let vari = this;
        this._httpprovider.httpReq('http://localhost:9001/users/candidates','GET',null,null).subscribe((data)=>{
            for (let i=0;i<data.length;i++){
            vari.candidates.push(data[i]);
            }
        });
        this._httpprovider.httpReq('http://localhost:9001/users/votedfor','POST',{username:this._userdetails.hasUsername()},null).subscribe((data)=>{
            vari.votedfor = {candidateid: data.candidateid,candidatename:data.candidatename};  
        });
    }
    
}