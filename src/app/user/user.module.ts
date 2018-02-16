import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { UserRoutingModule } from '@appUser/user-routing.module';
import { UserHomeComponent } from '@appUser/home/user-home.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserHomeComponent
  ]
})
export class UserModule { }
