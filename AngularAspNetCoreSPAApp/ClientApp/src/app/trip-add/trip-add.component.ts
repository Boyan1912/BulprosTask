import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JomoTrip } from '../../Models/JomoTrip';
import { Router } from '@angular/router';
import { TripDataService } from '../DataService/TripDataService'

@Component({
    selector: 'app-trip-add',
    templateUrl: './trip-add.component.html',
    styleUrls: ['./trip-add.component.sass']
})

export class TripAddComponent implements OnInit {

    @Input() cleardata: boolean = false;
    @Output() nameEvent = new EventEmitter<string>();
    objtemptrip: JomoTrip;
    @Input() objtrip: JomoTrip = new JomoTrip();;
    @ViewChild('closeBtn') cb: ElementRef;
    constructor(private dataservice: TripDataService, private route: Router) {

    }

    ngOnInit() {
        // this.ResetValues();
    }

    ResetValues() {


    }

    Register(regForm: NgForm) {

        this.objtemptrip = new JomoTrip();
        this.objtemptrip.name = regForm.value.name;
        this.objtemptrip.origin = regForm.value.origin;
        this.objtemptrip.destination = regForm.value.destination;
        this.objtemptrip.description = regForm.value.description;

        this.dataservice.AddTrip(this.objtemptrip).subscribe(res => {
            alert("Trip Added successfully");
            this.TakeHome();
        })
    }

    TakeHome() {
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click();
        this.route.navigateByUrl('');
    }
}
