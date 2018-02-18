import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from 'app/app-routing.module';
import { CoreModule } from '@appCore/core.module';
import { BackendModule } from '@appBackend/backend.module';
import { FrontendModule } from '@appFrontend/frontend.module';

import { AppComponent } from 'app/app.component';
import { UrlErrorComponent } from 'app/404/url-error.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    BackendModule,
    FrontendModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
