import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { UserDetailsService } from '@appCore/services/user-details.service';

@Injectable()
export class ShelterService {
  private baseUrl: string = 'http://alphard.us/v1/api';
  
  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }

  getShelter() {
    return this.http.get('./assets/shelter.json');
  }

  getAllShelters() {
    let shelterUrl: string= this.baseUrl + '/'
    return this.http.get('./assets/shelters.json');
  }

  getShelterAvailability() {
    return this.http.get('./assets/availability.json');
  }
}
