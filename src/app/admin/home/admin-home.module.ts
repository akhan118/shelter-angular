import { NgModule } from '@angular/core';

import { SharedModule } from '@appShared/shared.module';
import { AdminHomeRoutingModule } from '@appAdmin/home/admin-home-routing.module';

import { AvailabilityComponent } from '@appAdmin/home/availability/availability.component';
import { SettingsComponent } from '@appAdmin/home/settings/settings.component';
import { AdminHomeComponent } from '@appAdmin/home/admin-home.component';


@NgModule({
  imports: [
    SharedModule,
    AdminHomeRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    AvailabilityComponent,
    SettingsComponent
  ]
})
export class AdminHomeModule { }
