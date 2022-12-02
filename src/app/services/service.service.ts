import { Injectable } from '@angular/core';
import { movie } from '../Models/movie';
import { ScreenComponent } from '../Components/screen/screen.component';
import { seats } from '../Models/seats';

@Injectable({
  providedIn: 'root'
})
export class ServiceService 
{
  
  selectedseats:string[]=[];
  reservedseats:string[]=['A1','C2','D9'];
  seatPrice=120;
  Tax:number=20;

  constructor() 
  {}

  pushSelectedForPayment(seat:string[])
  {
    for(let i of seat)
    {
      this.selectedseats.push(i);
    }
  }
  pushReservedSeat(seat:string[])
  {
    for(let i of seat)
    {
      this.reservedseats.push(i);
    }
  }

  getSelectedSeats()
  {
    return this.selectedseats;
  }
  getReservedSeats()
  {
    return  this.reservedseats;
  }
  clearSelected()
  {
    this.selectedseats=[];
  }
}
