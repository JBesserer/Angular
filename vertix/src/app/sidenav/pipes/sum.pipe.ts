import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sumPipe'})
export class SumPipe implements PipeTransform {
  transform(mapToSum: Map<string, number>): number {
    let sum = 0;
    Object.keys(mapToSum).map( key => {
      sum += mapToSum[key];
    });
    return sum;
  }
}