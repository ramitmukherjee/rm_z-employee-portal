import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(gender: string, ...args: any[]): string {
    switch(gender){
      case 'M':
        return 'Male';
      case 'F':
        return 'Female';
      default:
        return 'Not Specified';
    }
  }

}
