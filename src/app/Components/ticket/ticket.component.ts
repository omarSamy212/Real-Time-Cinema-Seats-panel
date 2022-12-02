import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  state:boolean=true;
  seat:string[]=this.service.selectedseats;
  tPerTicket=this.service.seatPrice+this.service.Tax;

  cState()
  {
    this.state=!this.state;
  }

  goHome()
  {
    this.service.clearSelected();
    this.router.navigate(['/']);
  }
}
