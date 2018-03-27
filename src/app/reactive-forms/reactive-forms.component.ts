import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  // EmployeeForm: FormGroup;

  EmployeeForm = new FormGroup({
    fName: new FormControl('Keyur', [Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
    lName: new FormControl(),
    age: new FormControl(),
    phno: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  onClick(val) {
    console.log(this.EmployeeForm.value);
  }

}
