import { NgModule } from '@angular/core';

import { SharedModule } from '@appShared/shared.module';
import { BackendRoutingModule } from '@appBackend/backend-routing.module';

import { AuthComponent } from '@appBackend/auth/auth.component';
import { BackendComponent } from '@appBackend/backend.component';
import { AuthGuard } from '@appBackend/auth/auth.guard';

@NgModule({
  imports: [
    SharedModule,
    BackendRoutingModule
  ],
  declarations: [
    AuthComponent,
    BackendComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class BackendModule { }
