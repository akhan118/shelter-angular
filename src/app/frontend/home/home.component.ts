import { Component, OnInit } from '@angular/core';
import { ShelterService } from '@appCore/services/shelter.service';

export class Shelter extends Object {
  id: number;
  name: string;
  EIN: number;
  address: {
    street: string;
    zip: number;
  }
  phoneNumber: number;
}

@Component({
  selector: 'sa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shelters: Shelter[] = [];
  shelterTypes: string[] = ['All', 'Men', 'Women', 'Youth', 'Family']

  constructor(private shelterService: ShelterService) { }

  ngOnInit() {
    this.shelterService.getAllShelters()
      .subscribe((sheltersJSON: Shelter[]) => this.shelters = sheltersJSON,
        error => console.error('Error getting shelters', error));
  }

}
