
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContactComponent } from './pages/contact/contact.component';
import { CasinoComponent } from './pages/casino/casino.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';

const routes: Routes= [
  {
    path:'',
    children: [
      {
        path:'promotions',
        component: PromotionsComponent
      },
      {
        path:'casino',
        component: CasinoComponent
      },
      {
        path:'contact',
        component: ContactComponent
      },
      {
        path: '**',
        redirectTo: '404'
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

export class MainRoutingModule { }
