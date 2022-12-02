import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { seats } from 'src/app/Models/seats';
import { ServiceService } from 'src/app/services/service.service';
@Component(
    {
        selector: 'app-screen',
        templateUrl: './screen.component.html',
        styleUrls: ['./screen.component.css']
    })
export class ScreenComponent 
{


  movieTitle:string = "Captain America: The Winter Soldier";
    screen: string = "LUXE CINEMAS";
    time: string = "FRI, 6:45PM";
    

    rows: string[] = ['A', 'B', 'C', 'D', 'E'];
    cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    selected: string[] = [];
    reserved: string[]=[];
    
    ticketPrice: number = 120;
    convFee: number = 30;
    totalPrice: number = 0;
    currency: string = " EGP ";
    constructor(private router:Router,private service:ServiceService)
    {
        this.reserved=this.service.getReservedSeats();

    }

    //return status of each seat
    getStatus (seatPos: string) 
    {
           
            if(this.reserved.indexOf(seatPos) !== -1) 
            {
                return -1;
            } 
            else if(this.selected.indexOf(seatPos) !== -1) 
            {
                return 1;
                console.log(this.selected[0])
            }
    }
    //clear handler
    clearSelected () 
    {
        this.service.selectedseats = [];
    }
    //click handler
    seatClicked (seatPos: string) 
    {
            var index = this.selected.indexOf(seatPos);
            if(index !== -1) 
            {
                // seat already selected, remove
                this.selected.splice(index, 1)
            } 
            else 
            {
                if(this.selected.length<6)
                { 
                    //push to selected array only if it is not reserved
                    if(this.reserved.indexOf(seatPos) === -1)
                        this.selected.push(seatPos);
                 }
            }
        }
    //preceed to payment handler
    pushToSelected () 
    {
        if(this.selected.length > 0) 
        {
            // alert("Selected Seats: " + this.service.selectedseats + "\nTotal: "+(this.ticketPrice * this.service.getSelectedSeats.length + this.convFee));
            // this.service.reservedseats.push(...this.selected);
            
            this.service.selectedseats.push(...this.selected);
        } else 
        {
            alert("No seats selected!");
        }
    }

    goToPayment()
    {
        this.router.navigate(['/payment']);
    }

    getNoOfselected()
    {
        return this.selected.length;
    }
    getcurrentselected()
    {
         return this.selected[this.selected.length-1];
    }
    
        
    
}
