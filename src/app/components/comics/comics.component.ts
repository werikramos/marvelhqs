import { Comic } from './comic.model';
import { ComicsService } from './comics.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics: Comic[] = []
  filter: any = ''
  notFound = false;

  constructor(private comicsService: ComicsService, private router: Router) { }

  ngOnInit(): void {
    this.notFound = false
    this.getComics()
  }

  getComics(): void{
    this.comicsService.getComics().subscribe(comics =>{
      this.comics = comics
   });
  }

  getByTitle(filter: string | null){
    this.notFound = false
    this.comicsService.getComicByTitle(filter).subscribe(comics => {
      this.comics = comics
      if(this.comics.length == 0){
        this.notFound = true
      }
    });
  }
  

}
