import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService){}

  people: Person[];
  fullName: string;
  phone: string;
  cell: string;
  errorName: string;
  errorStatus: string;
  rows: number;

  ngOnInit(){
    this.peopleService.getPeopleList().subscribe((data: any) => {
      this.people = data.results;
      this.rows = this.people.length;
      console.log(this.people);
      if(this.people){
        this.hideLoader();
      }
    },
    (error) => {
      document.getElementById('error').style.display = 'block';
      this.hideLoader();
      this.errorName = error.name;
      this.errorStatus = error.status;
      throw error;
    });
  }

  openModal(title: string, fName: string, lName: string){
    const modal = document.getElementById('personModal');
    modal.style.display = 'block';
    this.fullName = title + ' ' + fName + ' ' + lName;
    this.phone = (this.people.find(x => x.name.first === fName)).phone || null;
    this.cell = (this.people.find(x => x.name.first === fName)).cell || null;
  }

  hide(){
    const modal = document.getElementById('personModal');
    modal.style.display = 'none';
  }

  hideLoader(){
    document.getElementById('load').style.display='none';
  }

}
