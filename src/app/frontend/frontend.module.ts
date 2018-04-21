import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

import { FrontendRoutingModule } from '@appFrontend/frontend-routing.module';
import { HomeComponent } from '@appFrontend/home/home.component';
import { ShelterItemComponent } from '@appFrontend/shelter-item/shelter-item.component';
import { SheltersComponent } from '@appFrontend/shelters/shelters.component';
import { SheltersSignupComponent } from '@appFrontend/shelters-signup/shelters-signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    SharedModule,
    FrontendRoutingModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    ShelterItemComponent
  ],
  declarations: [
    ShelterItemComponent,
    HomeComponent,
    SheltersComponent,
    SheltersSignupComponent
  ]
})
export class FrontendModule { }
