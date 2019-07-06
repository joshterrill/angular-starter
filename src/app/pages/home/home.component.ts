import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  people: Person[] = [];

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.getPeople();
      this.loading = false;
    }, 1000);
  }

  getPeople(): void {
    this.people = [
      {
        id: 1,
        firstName: 'Joshua',
        lastName: 'Terrill',
        email: 'joshterrill.dev@gmail.com',
        phoneNumber: '555-112-3345',
      }, {
        id: 2,
        firstName: 'Gustav',
        lastName: 'Morecio',
        email: 'goose@test.com',
        phoneNumber: '536-543-3322',
      }, {
        id: 3,
        firstName: 'Haley',
        lastName: 'McMurphy',
        email: 'hmcm@test.com',
        phoneNumber: '334-993-0059',
      }, {
        id: 4,
        firstName: 'Bella',
        lastName: 'George',
        email: 'bella@test.com',
        phoneNumber: '345-223-9954',
      }, {
        id: 5,
        firstName: 'Nick',
        lastName: 'Terrill',
        email: 'nicholast@test.com',
        phoneNumber: '453-422-5009',
      },
    ];
  }

  editPerson(person: Person): void {
    this.toastr.info('Successfully edited person');
  }

  deletePerson(person: Person): void {
    this.people.splice(this.people.indexOf(person), 1);
    this.toastr.success('Successfully deleted person');
  }

}
