import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniServiceService {

  private url: string = '';
 // private url: string = 'https://university-data.p.rapidapi.com/api/v2/rank/10';

  // Define headers separately
  private headers = new HttpHeaders({
    'x-rapidapi-key': '1c7a0f4332mshd7add8f4edc801ap113e8bjsn1082504ee8e3',  // Replace with your actual API key
    'x-rapidapi-host': 'university-data.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getUniDetails(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers })
      .pipe(map((res) => res));
  }
}
