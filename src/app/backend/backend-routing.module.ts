import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackendComponent } from './backend.component';
import { AuthComponent } from '@appBackend/auth/auth.component';
import { AuthGuard } from '@appBackend/auth/auth.guard';

const backendRoutes: Routes = [
  {
    path: '', component: BackendComponent, children: [
      { path: 'auth', component: AuthComponent },
      { path: 'dashboard', canActivate: [AuthGuard], loadChildren: '@appBackend/dashboard/dashboard.module#DashboardModule' },
      { path: '', redirectTo: 'auth', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(backendRoutes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
