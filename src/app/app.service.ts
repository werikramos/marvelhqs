import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';
import { Observable } from 'rxjs';
import { Response } from './response.model';


@Injectable({
  providedIn: 'root'
})
export class AppService {


  private urlBase = environment.urlBase
  private privateKey = environment.privateKey
  private publicKey = environment.publicKey
  private ts = environment.timestamp
  private hash = Md5.hashStr(this.ts + this.privateKey + this.publicKey)



  private  baseParams = Object.freeze({
    ts: this.ts,
    apikey: this.publicKey,
    hash: String(this.hash),
    limit: '30',
    orderBy: '-focDate'
  })


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  read(endpoint: string, filter?:any ): Observable<Response> {
    let params = {...this.baseParams}
    if(filter != null){
      params = Object.assign(params, filter)
    }
    const url = `${this.urlBase}/${endpoint}`
    return this.http.get<Response>(url, { params: params })
  }

  readById(endpoint: string, id: string): Observable<Response> {
    const url = `${this.urlBase}/${endpoint}/${id}`
    return this.http.get<Response>(url, { params: this.baseParams })
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
