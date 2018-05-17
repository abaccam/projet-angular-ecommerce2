import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageProduitComponent } from '../page-produit/page-produit.component';
import { ListeProduitComponent } from '../liste-produit/liste-produit.component';
import { PanierComponent } from '../panier/panier.component';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  { path: 'page-produit/:id', component: PageProduitComponent },
  { path: 'liste-produit', component: ListeProduitComponent },
  { path: 'panier', component:  PanierComponent},
  { path: '**', component: NotFoundComponent },
  
]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutesModule { }




