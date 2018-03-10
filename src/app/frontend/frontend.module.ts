import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { FrontendRoutingModule } from '@appFrontend/frontend-routing.module';
import { HomeComponent } from '@appFrontend/home/home.component';

@NgModule({
  imports: [
    SharedModule,
    FrontendRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class FrontendModule { }
