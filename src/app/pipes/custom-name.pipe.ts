import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Pipe({
  name: 'customName'
})
export class CustomNamePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
  }

}
