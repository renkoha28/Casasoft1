import { CarruselComponent } from './carrusel/carrusel.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        component: CarruselComponent
      }
    ]
  }
]

const routes2: Routes= [
  {
    path:'main',
    children: [
      {
        path:'promotions',
        component: CarruselComponent
      },
      {
        path:'casino',
        component: CarruselComponent
      },
      {
        path:'contact',
        component: CarruselComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CarruselRoutingModule { }
