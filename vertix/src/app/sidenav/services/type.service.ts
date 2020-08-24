import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TypeMetadata } from '../../models/type-metadata.model';
import { Type } from '../../models/type.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class TypeService {
  typeMetadataUrl = '../../../assets/data/type-metadata.json';
  url = 'api/types';
  constructor(private http: HttpClient) { }

  getTypes(): Observable<Array<Type>> {
    return this.http.get<Array<Type>>(environment.apiBaseUrl + this.url);
  }
}