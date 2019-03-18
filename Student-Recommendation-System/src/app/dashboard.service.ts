import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Details } from './details';

@Injectable({
  providedIn: 'root',
  })
export class DashboardService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/dashboard/details/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  // URL to web api
  getDashboard(id: any): Observable<Details> {
    return this.http.get<Details>(this.apiUrl + id, { headers: this.httpOptions.headers }).pipe(
      tap(_ => console.log('Got response')),
      catchError(this.handleError<Details>('getDashboard')),
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
