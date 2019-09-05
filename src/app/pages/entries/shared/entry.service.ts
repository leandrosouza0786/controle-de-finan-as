import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from '../../../shared/services/base-resource.service';
import {Observable, throwError} from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Entry } from './entry.model'

@Injectable({
  providedIn: 'root'
})

export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector : Injector) {
    super("api/entries", injector)
  }

  create(entry: Entry): Observable<Entry>{
    return this.http.post(this.apiPath, entry)
    .pipe(
    catchError(this.handleErro),
    map(this.jsonDataToResource))
  }

  update(entry: Entry): Observable<Entry>{
    const url = `${this.apiPath}/$(entry.id)`;
    return this.http.put(url, entry)
    .pipe(
      catchError(this.handleErro),
      map(() => entry)
    )
  }

  protected jsonDataToResources(jsonData: any[]): Entry[]{
    const entries: Entry[] = [];

    jsonData.forEach(element => {
      const entry = Object.assign(new Entry(), element)
      entries.push(entry)
    });
    return entries;
  }

  protected jsonDataToResource(jsonData: any): Entry{
    return Object.assign(new Entry(), jsonData)
  }

}
