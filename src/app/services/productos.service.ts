import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public BaseUrl :string = "";
  constructor
  (
    private http: HttpClient
  )
  {
    this.BaseUrl = BASE_URL;
  }

  get(): Observable<any>{
    const headers = this.getHeaders();
    return this.http.get(`${this.BaseUrl}/productos`, { headers }).pipe(catchError(this.handleErrors))
  }

  post(payload: any): Observable<any>{
    const headers = this.getHeaders();
    return this.http.post(`${this.BaseUrl}/productos`, payload, { headers }).pipe(catchError(this.handleErrors))
  }

  put(id: number, payload: any): Observable<any>{
    const headers = this.getHeaders();
    return this.http.put(`${this.BaseUrl}/productos/${id}`, payload, { headers }).pipe(catchError(this.handleErrors))
  }
  delete(id:number): Observable<any>{
    const headers = this.getHeaders();
    return this.http.delete(`${this.BaseUrl}/productos/${id}`).pipe(catchError(this.handleErrors))
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private handleErrors(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log("Ocurrio un error", error.error.message);
    }else{
      console.log(`Ocurrio un error ${error.status}, ${error.error}`);
    }
    return throwError('Algo salió mal');
  }

}

