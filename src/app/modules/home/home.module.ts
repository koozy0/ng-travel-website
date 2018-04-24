import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ParallexImageComponent } from './parallex-image/parallex-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    ParallexImageComponent
  ],
  exports: [
    HomeComponent,
    ParallexImageComponent
  ]
})
export class HomeModule { }
