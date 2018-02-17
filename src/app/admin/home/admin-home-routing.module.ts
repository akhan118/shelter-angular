import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home.component';
import { AvailabilityComponent } from '@appAdmin/home/availability/availability.component';
import { SettingsComponent } from '@appAdmin/home/settings/settings.component';

const homeRoutes: Routes = [
  {
    path: '', component: AdminHomeComponent, children: [
      { path: 'availability', component: AvailabilityComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'availability', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class AdminHomeRoutingModule { }

export const routedComponents = [AdminHomeComponent, AvailabilityComponent, SettingsComponent];