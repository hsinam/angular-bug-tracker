import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { RdisplayComponent } from './rdisplay/rdisplay.component';

const routes: Routes = [
  {
    path: 'display',
    component: DisplayComponent
  },
  {
    path: 'tform',
    component: TformComponent
  },
  {
    path: 'rform',
    component: RformComponent
  },
  {
    path: 'rdisplay',
    component: RdisplayComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
