import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '@appCore/services/user-details.service';

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
  username: string = null;

  constructor(private userDetails: UserDetailsService) { }

  ngOnInit() {
    this.username = this.userDetails.username;
  }

}
