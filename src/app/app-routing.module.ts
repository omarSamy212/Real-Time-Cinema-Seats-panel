import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenComponent } from './Components/screen/screen.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { TicketComponent } from './Components/ticket/ticket.component';

const routes: Routes = 
[
  { path: 'screen', component:ScreenComponent},
  { path: 'payment', component:PaymentComponent},
  { path: 'ticket', component:TicketComponent},
  { path: 'ticket', component:TicketComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
