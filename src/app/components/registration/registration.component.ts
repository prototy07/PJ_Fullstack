import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  Registrations = [
  {
    Subject:'Mathematics1',
    ID:6204062630521,
    Day:'Monday',
    Time:'9.00-12.00',
    Credit:3,
    Room:'-',
    Select:'Select'
  },
  {
    Subject:'Mathematics2',
    ID:6204062630599,
    Day:'Sunday',
    Time:'13.00-16.00',
    Credit:3,
    Room:'-',
    Select:'Select'
  },
  {
    Subject:'Mathematics3',
    ID:6204062630512,
    Day:'Turesday',
    Time:'17.00-20.00',
    Credit:3,
    Room:'-',
    Select:'Select'
  },
];
  
  Termlist = [
    {name: 'Semester1', code: 'Term1'},
    {name: 'Semester2', code: 'Term2'},
    
  ];
  
  
  
  

  constructor() { }

  ngOnInit(): void {
  }

}

