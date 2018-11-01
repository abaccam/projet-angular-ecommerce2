import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    $('#userData').css({'display': 'none'});
    $('app-user-update').css({'display': 'block'});
    }
}
