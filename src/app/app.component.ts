import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service'
import { AjaxService } from './services/ajax.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<app-header></app-header>
  //            <app-liste-produit></app-liste-produit>
  //            <app-footer></app-footer>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private ajax:AjaxService, private localStorage:LocalStorageService){
    ajax.getAllProduit().subscribe(value => {console.log(value)})
    let produits = localStorage.getAll()
    console.log(produits)
  }  
}
