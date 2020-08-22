import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap, filter } from 'rxjs/operators';
import { TypeMetadata } from '../../models/type-metadata.model';
import { Type } from '../../models/type.model';
import { environment } from '../../../environments/environment';
import { Temtem } from '../../models/temtem.model';

@Injectable()
export class TemtemService {
    url = 'api/temtems';
  constructor(private http: HttpClient) { }

  getTemtems(typeName: string): Observable<Array<Temtem>>{
    console.log(typeName);
    return this.http.get<Array<Temtem>>(environment.apiBaseUrl + this.url).pipe(
      map(temtems => temtems.filter( temtem => temtem.types.includes(typeName)))
    );
  }
}