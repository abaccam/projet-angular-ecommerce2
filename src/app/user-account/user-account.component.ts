import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor() { }

  id:any 
  ngOnInit() {
    let profile = JSON.parse(localStorage.getItem("profile"))
    this.id = profile.userId
  }
  

  toggle() {
    $('#userData').css({'display': 'block'});
    $('app-user-update').css({'display': 'none'});
    $('app-user-devis').css({'display': 'none'});
  }
  toggleDevis() {
    $('#userData').css({'display': 'none'});
    $('app-user-update').css({'display': 'none'});
    $('app-user-devis').css({'display': 'block'});
  }
  
}
