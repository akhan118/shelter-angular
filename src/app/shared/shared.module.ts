import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from 'app/navbar/navbar.component';
import { FooterComponent } from 'app/footer/footer.component';
import { ShelterTypePipe } from './shelter-type.pipe';

@NgModule({
  declarations: [
    ShelterTypePipe,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ShelterTypePipe,
    NavbarComponent,
    FooterComponent
  ]
})

export class SharedModule { }