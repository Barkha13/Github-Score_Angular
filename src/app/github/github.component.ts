import {GithubService} from './../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  username;
  score;

  constructor(private _githubService : GithubService) {}
  onSubmit(){
    this._githubService.getScore(this.username).subscribe(
      (response) =>{
        this.score = response.json()['public_repos'] + response.json()['followers'];
        console.log(this.score);
      },
      (error) => {
        console.log(error);
      }
    );
    this.username = undefined;
  }

  ngOnInit() {}

}
