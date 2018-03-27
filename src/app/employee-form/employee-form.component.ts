import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Employee(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }
}
