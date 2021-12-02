import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseWithoutPagination } from '../models/HttpResponse/response-without-pagination.model';
import { Platillo } from '../models/platillo.moldel';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {
  private getPlatilloUrl = 'https://localhost:44391/Platillos/ObtienePlatillo';

  constructor(public http: HttpClient) {}
/**
   * obtiene
   * @param id
   */
  getPlatillo(id : string): Observable<ResponseWithoutPagination<Platillo>> {
    const url = `${this.getPlatilloUrl}/${id}`;
    return this.http.get(url).pipe(
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
