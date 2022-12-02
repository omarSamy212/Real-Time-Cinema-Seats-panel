import { Time } from "@angular/common";

export class movie
{
    private id?:string;
    public name?:string;
    public description?:string;
    public date?:Date;
    public time?:Time;
    public poster?:string;

    constructor (id:string,name:string,description:string,date:Date,time:Time,poster:string)
    {
            this.id=id;
            this.name=name;
            this.description=name;
            this.date=date;
            this.time=time;
            this.poster=poster;
    }
}