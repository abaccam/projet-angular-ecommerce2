import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.createRegistrationForm()

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
