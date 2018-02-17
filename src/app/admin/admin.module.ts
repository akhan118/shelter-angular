import { NgModule } from '@angular/core';

import { SharedModule } from '@appShared/shared.module';
import { AdminRoutingModule } from '@appAdmin/admin-routing.module';

import { AuthComponent } from '@appAdmin/auth/auth.component';
import { AdminComponent } from '@appAdmin/admin.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AuthComponent,
    AdminComponent
  ]
})
export class AdminModule { }
