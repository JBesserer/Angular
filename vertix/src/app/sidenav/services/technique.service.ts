import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Technique } from '../../models/technique.model';

@Injectable()
export class TechniqueService {
    url = 'api/techniques';
  constructor(private http: HttpClient) { }

  getTechniques(): Observable<Array<Technique>>{
    return this.http.get<Array<Technique>>(environment.apiBaseUrl + this.url);
  }
}