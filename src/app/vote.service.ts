import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private apiUrl = 'https://yourapi.com/vote'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  submitVote(playerId: number): Observable<any> {
    return this.http.post(this.apiUrl, { playerId });
  }
}