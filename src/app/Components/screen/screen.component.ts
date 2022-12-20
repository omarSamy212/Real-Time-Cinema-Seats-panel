import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import  Seat from 'src/app/Model/seats';
import { ServiceService } from 'src/app/Service/service.service';
import { collectionSnapshots, DocumentReference, DocumentSnapshot,collectionChanges } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Serializer } from '@angular/compiler';
import { of } from 'rxjs';
@Component(
    {
        selector: 'app-screen',
        templateUrl: './screen.component.html',
        styleUrls: ['./screen.component.css']
    })
export class ScreenComponent implements OnInit
{


  movieTitle:string = "Captain America: The Winter Soldier";
    screen: string = "LUXE CINEMAS";
    time: string = '10AM';
    

    rows: string[] = ['A', 'B', 'C', 'D', 'E'];
    cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    selected: string[] = [];
    reserved: Seat[]=[];
    selecReserv: string[]=[];
    
    ticketPrice: number = 120;
    convFee: number = 30;
    totalPrice: number = 0;
    currency: string = " EGP ";
    seat:Seat
    rseats : any[]=[]
    alert=0
    constructor(private router:Router,private service:ServiceService)
    {
        this.seat = new Seat();
    }

    ngOnInit()
    {
        
        // this.service.getresSeats("avengers",this.time).then((data: DocumentSnapshot) => 
        //   {
        //     this.reserved = data?.data()?.['s'];
        //     console.log(this.reserved)
        //   });

        this.service.time=this.time
        collectionSnapshots(this.service.getAll()).pipe(
            map((seats) => {
              return seats.map((s) => {
                return ({ id:s.id,...s.data()})
              })
            })
          ).subscribe(data => {
            this.reserved = data;
          });
          

    }

    // getSeats()
    // {
    //     var s :string[]=[]
    //         for(let i of this.reserved)
    //         {
    //             s.push(i.id!)
    //         }
    //     this.service.getresSeats("avengers",this.time).then((data: DocumentSnapshot) => 
    //       {
    //         s = data?.data()?.['s'];
    //         console.log(this.reserved)
    //       });
    // } 

    //return status of each seat
    getStatus (seatPos: string) 
    {
            var s :string[]=[]
            for(let i of this.reserved)
            {
                s.push(i.id!)
            }
           
            if(s.indexOf(seatPos) !== -1) 
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
        var s :string[]=[]
        for(let i of this.reserved)
        {
            s.push(i.id!)
        }
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
                    if(s.indexOf(seatPos) === -1)
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
    showTicket()
    {
        this.router.navigate(['/ticket']);
    }

    getNoOfselected()
    {
        return this.selected.length;
    }
    getcurrentselected()
    {
         return this.selected[this.selected.length-1];
    }
     
  
    startTimer() 
    {
        let timeLeft= 7;
        var timer=setInterval(() => {
        if( timeLeft > 0) 
        {
            this.alert=1
            timeLeft--;
        } else 
        {
            this.alert=0
            clearInterval(timer)
        }
      },1000)
    
    }

    pushtoreserved()
    {

            for(let i of this.selected)
            {
                this.seat.id = i;
                this.service.addNewDocumentWithSpecificID(this.seat, this.service.mvID!,this.time)
                    // .then(() => {
                    // alert("added")});
            }
            for(let i of this.rseats)
            {
              this.reserved.push(i.id)
            }
            this.service.time=this.time
            this.selecReserv=this.selected
            this.startTimer()
            this.selected=[]
    }
    
}
