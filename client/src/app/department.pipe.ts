import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'department'
})
export class DepartmentPipe implements PipeTransform {

  transform(department: string, ...args: any[]): string {
    switch(department){
      case 'Dev':
        return 'Developer';
      case 'Test':
        return 'Tester';
      case 'IT':
        return 'IT'
      default:
        return 'Not Specified';
    }
  }

}
