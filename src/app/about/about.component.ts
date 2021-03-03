import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  rows: number;
  people: Person[];
  apiResponse: any;

  ngOnInit() {
    document.getElementById('api-response').style.display = 'none';
    document.getElementById('load').style.display='none';
    this.peopleService.getPeopleList().subscribe((data: any) => {
      this.people = data.results;
      this.rows = this.people.length;
    });
  }

  showResponse(){
    document.getElementById('load').style.display='inline-block';
    this.apiResponse = JSON.stringify(this.people);
    if(this.apiResponse){
      this.hideLoader();
      document.getElementById('api-response').style.display = 'block';
    }
  }

  hide(){
    document.getElementById('api-response').style.display = 'none';
  }

  hideLoader(){
    document.getElementById('load').style.display='none';
  }

}
