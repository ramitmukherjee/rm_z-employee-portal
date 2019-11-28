import { Pipe, PipeTransform } from '@angular/core';
import { __spreadArrays } from 'tslib';
import { User } from './models/User';

@Pipe({
  name: 'sortUser'
})
export class SortUserPipe implements PipeTransform {

  transform(users: User[], asc: boolean, ...args: string[]): any {
    let reverse = asc === true ? 1 : -1;
    return users.sort((userA, userB) => {
      let nameA = userA.firstName.toUpperCase();
      let nameB = userB.firstName.toUpperCase();

      if (nameA < nameB) {
        return -1 * reverse;
      }
      if (nameA > nameB) {
        return 1 * reverse;
      }
      return 0 * reverse;
    });
  }

}
