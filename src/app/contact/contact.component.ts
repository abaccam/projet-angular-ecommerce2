import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegistrationForm();

  }

  createRegistrationForm(): any {
    return this.formRegister = this.fb.group({
      email: [null, Validators.compose([Validators.email, Validators.required])],
    
    });
  }
  get email() {
    return this.formRegister.get('email');
  }

}
