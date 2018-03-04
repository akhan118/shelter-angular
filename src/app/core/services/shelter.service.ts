import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { UserDetailsService } from '@appCore/services/user-details.service';

@Injectable()
export class ShelterService {

  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }

  getShelterAvailability() {
    return this.http.get('./assets/shelter.json');
  }
}
