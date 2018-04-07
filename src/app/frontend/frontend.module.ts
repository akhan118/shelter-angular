import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { FrontendRoutingModule } from '@appFrontend/frontend-routing.module';
import { HomeComponent } from '@appFrontend/home/home.component';
import {ShelterItemComponent} from '@appFrontend/home/shelter-item.component';
import { SheltersComponent} from '@appFrontend/shelters/shelters.component';

@NgModule({
  imports: [
    SharedModule,
    FrontendRoutingModule
  ],
  declarations: [
    ShelterItemComponent,
    HomeComponent,
    SheltersComponent
  ]
})
export class FrontendModule { }
