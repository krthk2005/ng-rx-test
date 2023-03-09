import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesServiceService {

  content = require('assets/sample.json');
  private _jsonURL = 'assets/SampleJson.json';
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
