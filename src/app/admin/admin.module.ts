import { NgModule } from '@angular/core';

import { SharedModule } from '@appShared/shared.module';
import { AdminRoutingModule } from '@appAdmin/admin-routing.module';

import { AuthComponent } from '@appAdmin/auth/auth.component';
import { AdminComponent } from '@appAdmin/admin.component';
import { AuthGuard } from '@appAdmin/auth/auth.guard';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AuthComponent,
    AdminComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AdminModule { }
