import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjaxService } from '../services/ajax.service';
import { LocalStorageService } from '../services/local-storage.service';

export { AjaxService, LocalStorageService }

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ProduitModule { }
