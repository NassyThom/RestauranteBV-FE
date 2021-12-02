import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Menu } from '../models/menu.model';
import { ResponseWithoutData } from '../models/HttpResponse/response-without-data.model';
import { catchError } from 'rxjs/operators';
import { ResponseDataPaged } from '../models/HttpResponse/response-data-paged';
import { ResponseWithoutPagination } from '../models/HttpResponse/response-without-pagination.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private getMenuUrl = 'https://localhost:44391/Menu/ObtieneMenu';
  

  constructor(public http: HttpClient) {}

  getMenu(): Observable<ResponseWithoutPagination<Menu>> {
    return this.http.get(this.getMenuUrl).pipe(
      map((response: any) => {
        return response;
      }), // Capturamos cualquier response distinto de 200
      catchError(this.handleError)
    );
  }

  protected handleError(error: HttpErrorResponse): Observable<any> {
    const codes = [400, 401, 403, 404];

    if (!codes.includes(error.status)) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error);
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
          `body was: ${JSON.stringify(error.error)}`
      );
      return of(error.error);
    }
  }
}
