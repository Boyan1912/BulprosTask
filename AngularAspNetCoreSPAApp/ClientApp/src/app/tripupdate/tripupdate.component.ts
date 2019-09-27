import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { TripDataService } from '../DataService/TripDataService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { JomoTrip } from '../../Models/JomoTrip';
@Component({
    selector: 'app-tripupdate',
    templateUrl: './tripupdate.component.html',
    styleUrls: ['./tripupdate.component.sass']
})
export class TripUpdateComponent implements OnInit {

    constructor(private dataservice: TripDataService, private route: Router) {

    }
    @Output() nameEvent = new EventEmitter<string>();
    @ViewChild('closeBtn') cb: ElementRef;
    ngOnInit() {
    }

    @Input() reset: boolean = false;
    @ViewChild('regForm') myForm: NgForm;
    @Input() isReset: boolean = false;
    objtemptrip: JomoTrip;
    @Input() objtrip: JomoTrip = new JomoTrip();

    EditTrip(regForm: NgForm) {

        this.dataservice.EditTrip(this.objtrip).subscribe(res => {
            alert("Trip updated successfully");
            this.nameEvent.emit("ccc");
            this.cb.nativeElement.click();
        },
        )
    }

}
