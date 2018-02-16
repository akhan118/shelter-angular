import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from '@appUser/home/user-home.component';

const userRoutes: Routes = [
  {
    path: '', children: [
      { path: '', component: UserHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
