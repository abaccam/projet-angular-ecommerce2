import { Component, OnInit } from '@angular/core';
import { Produit } from '../entities/produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier:Produit[]
  constructor() { }

  ngOnInit() {
  }

}
