import { ContactComponent } from './pages/contact/contact.component';
import { CasinoComponent } from './pages/casino/casino.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    PromotionsComponent,
    CasinoComponent,
    ContactComponent
  ],
  imports: [
    MainRoutingModule
  ]
})
export class MainModule { }
