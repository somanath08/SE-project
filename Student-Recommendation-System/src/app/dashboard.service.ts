import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Details } from './details';
import { Courses } from './student-dashboard/student-dashboard.component';

export interface Courses {
  courseType: String;
  courseName: String;
  courseId: String;
  credits: String;
}

@Injectable({
  providedIn: 'root',
  })
export class DashboardService {
  constructor(private http: HttpClient) {}

  private personalDetailsUrl = 'http://localhost:3000/dashboard/details/personal/';

  private courseDetailsUrl = 'http://localhost:3000/dashboard/details/course/';

  private addcourseDetailsUrl = 'http://localhost:3000/dashboard/details/course/add/';

  private allCourseDetailsUrl = 'http://localhost:3000/dashboard/details/course/all';

  private floatedCourseUrl = 'http://localhost:3000/dashboard/details/floated/';

  private advisorUrl = 'http://localhost:3000/advise/start/1/';

  private advisorMidUrl = 'http://localhost:3000/advise/mid/';

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
  getPersonalDetails(id: any): Observable<Details> {
    return this.http
      .get<Details>(this.personalDetailsUrl + id, { headers: this.httpOptions.headers })
      .pipe(
        tap(_ => console.log('Got response')),
        catchError(this.handleError<Details>('getPersonalDetails')),
      );
  }

  // URL to web api
  getCourseDetails(id: any): Observable<[]> {
    return this.http
      .get<[]>(this.courseDetailsUrl + id, { headers: this.httpOptions.headers })
      .pipe(
        tap(_ => console.log('Got response')),
        catchError(this.handleError<[]>('getCourseDetails')),
      );
  }

  // URL to web api
  getAllDetails(): Observable<Courses[]> {
    return this.http
      .get<Courses[]>(this.allCourseDetailsUrl, { headers: this.httpOptions.headers })
      .pipe(
        tap(_ => console.log('Got response')),
        catchError(this.handleError<Courses[]>('getAllDetails')),
      );
  }

  add(data: any, id: any): Observable<string> {
    return this.http
      .post(this.addcourseDetailsUrl + id, data, {
        headers: this.httpOptions.headers,
        responseType: 'text',
      })
      .pipe(
        tap(_ => console.log('Got response')),
        catchError(this.handleError<string>('add', '')),
      );
  }

  // URL to web api
  getCourseAdvice(id: any): Observable<[]> {
    return this.http.get<[]>(this.advisorUrl + id, { headers: this.httpOptions.headers }).pipe(
      tap(_ => console.log('Got response')),
      catchError(this.handleError<[]>('getCourseAdvice')),
    );
  }

  // URL to web api
  getMidCourseAdvice(grade: number): Observable<string> {
    console.log('Here');
    return this.http
      .get<string>(this.advisorMidUrl + grade, { headers: this.httpOptions.headers })
      .pipe(
        tap(_ => console.log('Got response for Mid Sem')),
        catchError(this.handleError<string>('getMidCourseAdvice')),
      );
  }

  // URL to web api
  getfloatedCourse(id: any): Observable<Courses> {
    return this.http
      .get<Courses>(this.floatedCourseUrl + id, { headers: this.httpOptions.headers })
      .pipe(
        tap(_ => console.log('Got response')),
        catchError(this.handleError<Courses>('getFloatedCourse')),
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
