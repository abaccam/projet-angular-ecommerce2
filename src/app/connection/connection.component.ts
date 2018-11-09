import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoopbackService } from '../services/loopback.service';
import { CompareValidator } from '../shered/compar-validator.directive';
import { Profile } from '../entities/profile';
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
    }
    )
  }

  // signIn(form){
  //   console.log(form);
  //   this.api.login(form.value).subscribe(value =>
  //     {console.log(value);
  //       this.api.getFavs(value["userId"], value["id"]).subscribe(favorite =>
  //         {
  //           console.log(favorite);

  //         }
  //         );
  //     } 

  //   )
  // }

}
