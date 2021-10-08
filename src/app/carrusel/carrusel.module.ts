import { CarruselComponent } from './carrusel/carrusel.component';

import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    CarruselComponent
  ],
  imports:[
    CarouselModule,
  ],
  exports: [
    CarruselComponent
  ]
})
export class CarruselModule { }
