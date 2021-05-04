import { Observable } from 'rxjs';
import { Comic } from './comic.model';
import { Injectable } from '@angular/core';
import { AppService } from './../../app.service';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  //set endpoint
  endpoint = 'comics'
  comics: Comic[] = []


  constructor(private appservice: AppService) { }

  getComics(): Observable<Comic[]> {
    return new Observable((observer) => {
      this.appservice.read(this.endpoint).subscribe(response => {
        if (response.code == 200) {
          observer.next(response.data.results)
        } else {
          this.appservice.showMessage("Error")
        }
      });
    });
  }

  getComicByTitle(filterValue: any) {
    if (filterValue != null && filterValue != '') {
      filterValue = { titleStartsWith: filterValue }
    }else{
      filterValue = null
    }
    return new Observable<Comic[]>((observer) => {
      this.appservice.read(this.endpoint, filterValue).subscribe(response => {
        if (response.code == 200) {
          console.log(response)
          observer.next(response.data.results)
        } else {
          this.appservice.showMessage("Error")
        }
      });
    });
  };

  getComicById(id: string) {
    return new Observable<Comic>((observer) => {
      this.appservice.readById(this.endpoint, id).subscribe(response => {
        if (response.code == 200) {
          observer.next(response.data.results.shift())
        } else {
          this.appservice.showMessage("Error")
        }
      });
    });
  };
}
