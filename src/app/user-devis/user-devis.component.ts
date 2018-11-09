import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user-devis',
  templateUrl: './user-devis.component.html',
  styleUrls: ['./user-devis.component.css']
})
export class UserDevisComponent implements OnInit {
  devis = []
  constructor(private userData:UserDataService) { }

  ngOnInit() {
    this.devis = this.userData.devis
  }

}
