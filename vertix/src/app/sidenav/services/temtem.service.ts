import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TypeMetadata } from '../../models/type-metadata.model';
import { Type } from '../../models/type.model';
import { environment } from '../../../environments/environment';
import { Temtem } from '../../models/temtem.model';

@Injectable()
export class TemtemService {
    url = 'api/temtems';
  constructor(private http: HttpClient) { }

  getTemtems(): Observable<Array<Temtem>>{
    return this.http.get<Array<Temtem>>(environment.apiBaseUrl + this.url);
  }
}