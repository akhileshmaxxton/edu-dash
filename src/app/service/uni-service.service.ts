import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniServiceService {

  //private url: string = '';
  private url: string = 'https://university-data.p.rapidapi.com/api/v2/rank/10';

  // Define headers separately
  private headers = new HttpHeaders({
  });

  constructor(private http: HttpClient) { }

  getUniDetails(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers })
      .pipe(map((res) => res));
  }


  contactApi(contactDetails : any) {
    return axios.post("http://localhost:7001/api/contact", contactDetails);
  }

  registerApi(registerDetails : any) {
    return axios.post("http://localhost:7001/api/register", registerDetails);
  }

  loginApi(loginDetails : any) {
    return axios.get("http://localhost:7001/api/login", loginDetails);
  }
}
