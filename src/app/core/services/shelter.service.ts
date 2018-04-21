import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { UserDetailsService } from '@appCore/services/user-details.service';

@Injectable()
export class ShelterService {
  private baseUrl: string = 'http://www.alphard.us/v1/api/getallshelters';
  
  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }

  getShelter() {
    return this.http.get('./shelter');
  }

  getAllShelters() {
    let shelterUrl: string= this.baseUrl + '/'
    return this.http.get(shelterUrl);
  }

  getShelterAvailability() {
    return this.http.get('./availability');
  }
}
