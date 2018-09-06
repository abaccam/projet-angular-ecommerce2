import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes/routes.module';

import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './services/local-storage.service';
import { AjaxService } from './services/ajax.service';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { PanierComponent } from './panier/panier.component';
import { PageProduitComponent } from './page-produit/page-produit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnectionComponent } from './connection/connection.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeProduitComponent,
    PanierComponent,
    PageProduitComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    BreadcrumbComponent,
    NavbarComponent,
    AccueilComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    RoutesModule,
    HttpClientModule,
    // LocalStorageService,
    // AjaxService
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
