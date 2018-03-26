import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sa-shelter-item',
  templateUrl: './shelter-item.component.html',
  styleUrls: ['./shelter-item.component.css']
})
export class ShelterItemComponent implements OnInit {
  @Input() ShelterData 
   constructor() { }

  ngOnInit() {
    console.log ('ShelterData', this.ShelterData);
  }

}
