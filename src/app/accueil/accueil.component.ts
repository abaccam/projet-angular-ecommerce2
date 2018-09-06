import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // private overedClass: string = 'bottleBlur';
  // private mouseOvered: boolean;
  
  // onMouseOver() {
  //     this.mouseOvered  = true;
  // } 
  
  // onMouseOut() {
  //     this.mouseOvered  = false;
  // } 

  bottleBlur() {
    $('img').addClass('bottleBlur');
  }
  
  bottleUnblur() {
    $('img').removeClass('bottleBlur');
  }

}
