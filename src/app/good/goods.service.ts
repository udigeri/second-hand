import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { GoodsCategory } from './export/goods-category';
import { IGoodsData } from './export/goods-data';
import { Goods } from './goods';

@Injectable()
export class GoodsService {

  private _goods: Goods[] = [];

  constructor(private _http: HttpClient) {
    for(let i: number=1; i<=10; i++){
      this._goods.push(new Goods(1, `Good_${i}`, GoodsCategory.OTHER, i, `Description_${i}`));
    } 
  }

  public getGoods(): Observable<Goods[]> {
    const url: string = 'http://localhost:3001/goods';
    return this._http.get<Goods[]>(url, {observe: 'response'}).pipe(
      map((response: HttpResponse<IGoodsData[]>) => {
        if (response.status === 204 || response.body === null) {
          return [];
        }
 
        return response.body.map((data: IGoodsData) => Goods.fromJson(data));
      }),
      catchError(this._handleError)
    );
  }

  private _handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}\nEnd-point: ${err.url}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}\nEnd-point: ${err.url}`;
    }
    alert(errorMessage);
 
    return throwError(errorMessage);
  }
}
