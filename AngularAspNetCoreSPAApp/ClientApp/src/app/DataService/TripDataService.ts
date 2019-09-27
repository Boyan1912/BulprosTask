import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JomoTrip } from '../../Models/JomoTrip'
import { ROOT_URL } from '../../Models/Config'
import { Observable } from 'rxjs';

@Injectable()
export class TripDataService {
    trips: Observable<JomoTrip[]>;
    newtrip: JomoTrip;
    constructor(private http: HttpClient) {

    }

    getTrip() {
        return this.http.get<JomoTrip[]>(ROOT_URL + 'Trips');
    }
    AddTrip(trip: JomoTrip) {

        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            Name: trip.name, Origin: trip.origin, Destination: trip.destination, Description: trip.description
        }
        
        return this.http.post<JomoTrip>(ROOT_URL + '/Trips', body, { headers });
    }

    EditTrip(trip: JomoTrip) {
        const params = new HttpParams().set('Id', trip.id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            Name: trip.name, Origin: trip.origin, Destination: trip.destination, Description: trip.description
        }
        return this.http.put<JomoTrip>(ROOT_URL + 'Trips/' + trip.id, body, { headers, params })
    }

    DeleteTrip(trip: JomoTrip) {
        const params = new HttpParams().set('Id', trip.id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            Name: trip.name, Origin: trip.origin, Destination: trip.destination, Description: trip.description
        }
        return this.http.delete<JomoTrip>(ROOT_URL + '/Trips/' + trip.id)
    }
}




