import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CardDetailpageComponent } from './card-detailpage/card-detailpage.component';
import { Card } from './card';

const routes: Routes = [
{path: '', component: MainpageComponent},
{path: 'detail', component: CardDetailpageComponent },
{path: '**', component: MainpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
