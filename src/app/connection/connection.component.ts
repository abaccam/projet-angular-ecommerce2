import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoopbackService } from '../services/loopback.service';
import { CompareValidator } from '../validator/compar-validator.directive';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private loopbackService: LoopbackService, private fb: FormBuilder, private router: Router, private localStorageService: LocalStorageService, private userData: UserDataService) { }

  ngOnInit() {
    this.createRegistrationForm();
  }
  formRegister: FormGroup;



  createRegistrationForm(): any {
    return this.formRegister = this.fb.group({
      email: [null, Validators.compose([Validators.email, Validators.required])],
      password: [null, Validators.compose([Validators.minLength(5), Validators.required])],
      confirmPassword: [null, [Validators.required, CompareValidator('password')]],
      loginEmail: [null, Validators.compose([Validators.email, Validators.required])]
    });
  }
  get email() {
    return this.formRegister.get('email');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get confirmPassword() {
    return this.formRegister.get('confirmPassword');
  }
  get loginEmail() {
    return this.formRegister.get('loginEmail');
  }
  

  signIn(form) {
    console.log(form.form.value);
    this.loopbackService.login(form.form.value).subscribe(value => {
      console.log(value);
      this.loopbackService.getDevis(value["userId"], value["id"]).subscribe(devis => {
        console.log(devis);
        localStorage.setItem("profile", JSON.stringify(value))
        this.router.navigate(["mon-compte", value["userId"]])
        this.userData.devis = devis
      }
      );
    }
    )
  }
  signUp(form) {
    console.log(form.form.value);
    this.loopbackService.newUser(form.form.value).subscribe(value => {
      console.log(value);
    })
  }

  messageDisplay() {
    // if($('#loginSpan').hasClass('secondSpan')){
    //   $('#signUpSpan').addClass('firstSpan');
    //   $('#loginSpan').removeClass('secondSpan');
    //   $('#loginSpan').css('display', 'none');
    // }else {
    //   $('#loginSpan').addClass('secondSpan');
    //   $('#signUpSpan').removeClass('firstSpan');
    //   $('#signUpSpan').css('display', 'none');
    // }
  }
  
}
