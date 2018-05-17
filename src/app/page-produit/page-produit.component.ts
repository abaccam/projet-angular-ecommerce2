import { Component, OnInit } from '@angular/core';
import { Produit } from '../entities/produit';
import { ActivatedRoute } from '@angular/router';
import { AjaxService } from '../services/ajax.service';


@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.css']
})
export class PageProduitComponent implements OnInit {
produit:Produit 

addProduct(): void {
  // this.produit.push()
}
  constructor(private route: ActivatedRoute, private ajax:AjaxService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.produit = this.ajax.produits[+params['id']-1]);

  }
  

}


