import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from 'app/app.component';
import { SplashScreenComponent } from 'app/splash-screen/splash-screen.component';
import { UrlErrorComponent } from 'app/404/url-error.component';

const appRoutes: Routes = [
  { path: 'admin', loadChildren: '@appAdmin/admin.module#AdminModule' },
  { path: 'user', loadChildren: '@appUser/user.module#UserModule' },
  { path: 'splashscreen', component: SplashScreenComponent },
  { path: '404', component: UrlErrorComponent },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent, SplashScreenComponent, UrlErrorComponent];