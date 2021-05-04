import { Response } from './../../../response.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../comics.service';
import { Comic } from '../comic.model';



@Component({
  selector: 'app-comics-view',
  templateUrl: './comics-view.component.html',
  styleUrls: ['./comics-view.component.css']
})
export class ComicsViewComponent implements OnInit {
  endpoint = 'comics'
  response: Partial<Response> = {}
  comic: Partial<Comic> = {}


  constructor(private comicsService: ComicsService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.comicsService.getComicById(id).subscribe(comic => {
      this.comic = comic
      console.log(this.comic)
    });
  }

}
