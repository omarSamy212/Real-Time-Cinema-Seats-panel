import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MvDetailsComponent } from './Components/mv-details/mv-details.component';
import { ScreenComponent } from './Components/screen/screen.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ServiceService } from './services/service.service';
import { TicketComponent } from './Components/ticket/ticket.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TestComponent } from './Components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MvDetailsComponent,
    ScreenComponent,
    PaymentComponent,
    TicketComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
