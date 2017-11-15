import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {

  private username;

  constructor(private _http : Http) { }

  getScore = function(username){
    return this._http.get(`https://api.github.com/users/${username}`);
  }
}
