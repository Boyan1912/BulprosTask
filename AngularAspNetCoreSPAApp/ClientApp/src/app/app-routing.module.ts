import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCRUDComponent } from './angular-crud/TripList';
import { TripUpdateComponent } from './tripupdate/tripupdate.component';

import { TripAddComponent } from './trip-add/trip-add.component';

const routes: Routes = [{path:'',component:AngularCRUDComponent},
{path:'Edit',component:TripUpdateComponent},
{path:'Add',component:TripAddComponent},
{path:'Home',component:AngularCRUDComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
