import { Component, OnInit, ViewChild } from '@angular/core';
import { TripAddComponent } from '../trip-add/trip-add.component';
import { TripDataService } from '../DataService/TripDataService'
import { JomoTrip } from '../../Models/JomoTrip'
import { Router } from '@angular/router';
import { TripUpdateComponent } from '../tripupdate/tripupdate.component';

@Component({
    selector: 'app-angular-crud',
    templateUrl: './angular-crud.component.html',
    styleUrls: ['./angular-crud.component.sass']
})

export class AngularCRUDComponent implements OnInit {


    triplist: JomoTrip[];
    dataavailbale: Boolean = false;
    temptrip: JomoTrip

    constructor(private dataservce: TripDataService, private route: Router) {

    }

    ngOnInit() {
        this.LoadData();
    }

    LoadData() {
        this.dataservce.getTrip().subscribe((tempdata) => {
            this.triplist = tempdata;
            console.log(this.triplist);
            this.dataavailbale = this.triplist.length > 0;
        })
        , err => {
            console.log(err);
        }
    }
    deleteconfirmation(id: string) {
        if (confirm("Are you sure you want to delete this trip?")) {
            this.temptrip = new JomoTrip();
            this.temptrip.id = id;
            this.dataservce.DeleteTrip(this.temptrip).subscribe(res => {
                alert("Deleted successfully !!!");
                this.LoadData();
            })
        }
    }
    @ViewChild('tripadd') addcomponent: TripAddComponent
    @ViewChild('regForm') editcomponent: TripUpdateComponent

    loadAddnew() {
        this.addcomponent.objtrip.name = "";
        this.addcomponent.objtrip.origin = "";
        this.addcomponent.objtrip.destination = "";
        this.addcomponent.objtrip.id = "";
        this.addcomponent.objtrip.description = "";
    }

    loadnewForm(id: string, name: string, origin: string, destination: string, description: string) {
        this.editcomponent.objtrip.name = name;
        this.editcomponent.objtrip.origin = origin;
        this.editcomponent.objtrip.destination = destination;
        this.editcomponent.objtrip.id = id;
        this.editcomponent.objtrip.description = description;
    }

    RefreshData() {
        this.LoadData();
    }
}
