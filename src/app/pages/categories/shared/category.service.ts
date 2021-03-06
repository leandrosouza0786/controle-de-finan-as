import { Injectable, Injector } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Category } from './category.modal'

import { BaseResourceService } from '../../../shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})

export  class CategoryService extends BaseResourceService<Category> {

  constructor(protected injector: Injector) {
    super("api/categories", injector )
   }

}
