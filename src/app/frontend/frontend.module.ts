import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { FrontendRoutingModule } from '@appFrontend/frontend-routing.module';
import { HomeComponent } from '@appFrontend/home/home.component';
import { ShelterItemComponent } from '@appFrontend/shelter-item/shelter-item.component';
import { SheltersComponent } from '@appFrontend/shelters/shelters.component';

@NgModule({
  imports: [
    SharedModule,
    FrontendRoutingModule
  ],
  exports: [
    ShelterItemComponent
  ],
  declarations: [
    ShelterItemComponent,
    HomeComponent,
    SheltersComponent
  ]
})
export class FrontendModule { }
