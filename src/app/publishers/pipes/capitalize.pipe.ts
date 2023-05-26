import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      const firstChar = value.charAt(0).toUpperCase();
      const restOfString = value.slice(1);
      return firstChar + restOfString.toLowerCase();
    }
    return value;
  }
}
