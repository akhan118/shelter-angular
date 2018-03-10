import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
<<<<<<< HEAD
import { UserDetailsService } from '@appCore/services/user-details.service';
@Injectable()
export class ShelterService {
  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }
  getShelter() {
    return this.http.get('./assets/shelter.json');
  }
  getAllShelters() {
    return this.http.get('./assets/shelters.json');
  }
=======

import { UserDetailsService } from '@appCore/services/user-details.service';

@Injectable()
export class ShelterService {

  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }

  getShelter() {
    return this.http.get('./assets/shelter.json');
  }

  getAllShelters() {
    return this.http.get('./assets/shelters.json');
  }

>>>>>>> bce13859f46974457de927fb9ae3a0d767a0539e
  getShelterAvailability() {
    return this.http.get('./assets/availability.json');
  }
}
