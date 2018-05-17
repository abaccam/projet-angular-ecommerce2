import { Injectable } from '@angular/core';
import { Produit } from '../entities/produit';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  setItem(key : string, value) {
    let json = JSON.stringify(value)
    localStorage.setItem(key, json)
  }

  getAll(){
    let produits = []
    /**
     * on itère sur le localStorage à la manière d'un tableau
     * puis on parse et pousse chaques valeurs dans le tableau `users` que l'on retourne à la fin de l'itération.
     */
    for(var i = 0; i < localStorage.length; i++){
      let parsedJson:Produit = JSON.parse(localStorage.getItem(localStorage.key(i)))
      produits.push(parsedJson)
    }

    return produits
  }
}
