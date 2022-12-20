import { Injectable } from '@angular/core';
import { addDoc, Firestore, collection, doc, updateDoc, setDoc, getDoc, deleteDoc } from "@angular/fire/firestore";
import  seat  from '../Model/seats';



@Injectable({
  providedIn: 'root'
})
export class ServiceService 
{
  
  selectedseats:string[]=[];
  reservedseats:string[]=[];
  seatPrice=120;
  Tax:number=20;
  mvID?:string
  time?:string='10AM'


  constructor(private db: Firestore) 
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

  //Firebase//

  addNewDocument(seat: seat) {
    const dbInstance = collection(this.db, "seats");
    return addDoc(dbInstance, { ...seat });
}

addNewDocumentWithSpecificID(seats: seat, mvid: string,time:string) {
    const dbInstance = collection(this.db, `mvSeats/${mvid}/${time}`);
    return setDoc(doc(dbInstance,seats.id),  {...seats} );
}

bookSeat(mvid: string, time:string,seatid:string[]) {
    const dataUpdate = doc(this.db, `mvSeats/${mvid}/${time}`,"ResSeats");
    return updateDoc(dataUpdate, {
        s:seatid
    });
}

getDocument(reservedseats: string) {
    const dbInstance = collection(this.db, "movie");
    return getDoc(doc(dbInstance, reservedseats));
}


getAll() 
{
    return collection(this.db, `mvSeats/${this.mvID}/${this.time}`);
}

deleteDocument(id: string) {
    const dataDelete = doc(this.db, "user", id);
    return deleteDoc(dataDelete);
}

addMovieSeats(seat: seat, id: string) {
  const dbInstance = collection(this.db, "movie");
  return setDoc(doc(dbInstance, id), { ...seat });
}

getresSeats(mvId:string,time:string)
{ 
  const dbInstance = collection(this.db, `mvSeats/${mvId}/${time}`);
  return getDoc(doc(dbInstance,"ResSeats"));
}




}


