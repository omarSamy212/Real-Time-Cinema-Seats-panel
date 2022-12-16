import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
// import { seats } from 'src/app/Models/seats';
import { map } from 'rxjs/operators';
import { ServiceService } from 'src/app/services/service.service';
import { collectionSnapshots, DocumentReference, DocumentSnapshot,collectionChanges } from '@angular/fire/firestore';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit 
{

  constructor(private router:Router,private service:ServiceService) { }

  reserved:any
  ngOnInit(): void 
  {
    // this.service.getresSeats("avengers","10AM").then((data: DocumentSnapshot) => 
    //       {
    //         this.reserved = data?.data()?.['10AM'];
    //         console.log(this.reserved)
    //         alert(this.reserved)
    //       });

    
  }
  
}
