import { Component, OnInit } from '@angular/core';
import { Produit } from '../entities/produit';
import { AjaxService } from '../services/ajax.service';


@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  list:Produit[] 
    
  constructor(private ajax:AjaxService) { }

  ngOnInit() {
    this.ajax.getAllProduit().subscribe(value => this.list = value)
  }

}



