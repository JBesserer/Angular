import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, filter, take, map } from 'rxjs/operators';
import { TypeMetadata } from '../../models/type-metadata.model';
import { Type } from '../../models/type.model';
import { environment } from '../../../environments/environment';
import { Weakness } from '../../models/weakness.model';

@Injectable()
export class WeaknessService {
    url = 'api/weaknesses';
    constructor(private http: HttpClient) { }

    getWeaknesses(): Observable<Map<string, Weakness>>{
        return this.http.get<Map<string, Weakness>>(environment.apiBaseUrl + this.url);
    }

    getWeaknessForType(typeKey: string): Observable<Weakness>{
        return this.http.get<Map<string, Weakness>>(environment.apiBaseUrl + this.url).pipe(
            map(mapReturn => mapReturn[typeKey])
        );
    }
}
