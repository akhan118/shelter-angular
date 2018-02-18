import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '@appAdmin/admin.component';
import { AuthComponent } from '@appAdmin/auth/auth.component';
import { AuthGuard } from '@appAdmin/auth/auth.guard';

const adminRoutes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'auth', component: AuthComponent },
      { path: 'home', canActivate: [AuthGuard], loadChildren: '@appAdmin/home/admin-home.module#AdminHomeModule' },
      { path: '', redirectTo: 'auth', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
