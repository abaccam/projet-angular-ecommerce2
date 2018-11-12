import { Component, OnInit } from '@angular/core';
import { LoopbackService } from '../services/loopback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private loopbackService: LoopbackService, private router: Router) { }

  id: any
  token:string
  profile:any
  ngOnInit() {
   this.profile = JSON.parse(localStorage.getItem("profile"))
    this.id = this.profile.userId

  }
  logout() {
    this.token = this.profile.id;
    this.loopbackService.logout(this.token).subscribe(value => {
      console.log(value);
      this.router.navigate(['']);

    }
    );
  }



  toggle() {
    $('#userData').css({ 'display': 'block' });
    $('app-user-update').css({ 'display': 'none' });
    $('app-user-devis').css({ 'display': 'none' });
  }
  toggleDevis() {
    $('#userData').css({ 'display': 'none' });
    $('app-user-update').css({ 'display': 'none' });
    $('app-user-devis').css({ 'display': 'block' });
  }

}
