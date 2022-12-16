import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { ScreenComponent } from '../screen/screen.component';
import { ServiceService } from 'src/app/services/service.service';
import seat from 'src/app/Models/seats';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit 
{

  seat?:string[]=this.service.selectedseats;
  totalCost=this.service.selectedseats.length*this.service.seatPrice;
  tax=this.service.Tax;
  
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  confirmPayment()
  {
    this.service.reservedseats.push(...this.service.selectedseats);
    this.router.navigate(['ticket'])
  }

}
