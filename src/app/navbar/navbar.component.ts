import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() navItems;

  constructor() { }

  ngOnInit() {
    console.log('items', this.navItems)
  }

}
