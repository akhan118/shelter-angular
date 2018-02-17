import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  navLinks: object[] = [
    { name: 'availability', url: '/admin/home/availability' },
    { name: 'settings', url: '/admin/home/settings' }
  ];

  constructor() { }

  ngOnInit() { }

}
