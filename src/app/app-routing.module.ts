import { ComicsViewComponent } from './components/comics/comics-view/comics-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from "./components/comics/comics.component"


const routes: Routes = [
  {
    path: "",
    component: ComicsComponent
  },
  {
    path: "comics",
    component: ComicsComponent
  },
  {
    path: "comics-view/:id",
    component: ComicsViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
