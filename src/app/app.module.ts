import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from 'app/app-routing.module';

import { CoreModule } from '@appCore/core.module';
import { AdminModule } from '@appAdmin/admin.module';
import { UserModule } from '@appUser/user.module';

import { UrlErrorComponent } from 'app/404/url-error.component';
import { SplashScreenComponent } from 'app/splash-screen/splash-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    UrlErrorComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    AdminModule,
    UserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
