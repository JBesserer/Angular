import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({name: 'addApiUrlPipe'})
export class AddApiUrlPipe implements PipeTransform {
  transform(urlToComplete: string): string {
    return environment.apiBaseUrl + urlToComplete;
  }
}