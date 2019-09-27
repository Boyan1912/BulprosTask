import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCRUDComponent } from './angular-crud/TripList';
import { TripAddComponent } from './trip-add/trip-add.component';
import { TripUpdateComponent } from './tripupdate/tripupdate.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TripDataService } from '../app/DataService/TripDataService';

@NgModule({
  declarations: [
    AppComponent,
    AngularCRUDComponent,
    TripAddComponent,
    TripUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [TripDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
