import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { FrontendRoutingModule } from '@appFrontend/frontend-routing.module';
import { HomeComponent } from '@appFrontend/home/home.component';
import {ShelterItemComponent} from '@appFrontend/home/shelter-item.component';
@NgModule({
  imports: [
    
    SharedModule,
    FrontendRoutingModule
  ],
  declarations: [
    ShelterItemComponent,
    HomeComponent
  ]
})
export class FrontendModule { }
