
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
    selector: 'shelters',
    templateUrl: 'shelters.component.html'
})

export class SheltersComponent implements OnInit {
    shelters: Shelter[] = [];
    constructor(private _shelterService: ShelterService) { }

    ngOnInit() {
        this._shelterService.getAllShelters()
            .subscribe((sheltersJSON: Shelter[]) => this.shelters = sheltersJSON,
                error => console.error('Error getting shelters', error));
    }
}