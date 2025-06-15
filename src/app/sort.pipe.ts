import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false, // Set to false to allow re-evaluation on each change detection cycle // removing caching
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction?: 'asc' | 'dsc') {
    const sortedArray = [...value];

    if (direction === 'asc' || direction === undefined) {
      sortedArray.sort((a, b) => {
        if (typeof a === 'string' && typeof b === 'string') {
          return a.localeCompare(b);
        } else if (typeof a === 'number' && typeof b === 'number') {
          return a > b ? 1 : -1;
        } else {
          throw new Error('Array must contain only strings or numbers');
        }
      });
      return sortedArray;
    } else if (direction === 'dsc') {
      sortedArray.sort((a, b) => {
        if (typeof a === 'string' && typeof b === 'string') {
          return b.localeCompare(a);
        } else if (typeof a === 'number' && typeof b === 'number') {
          return b > a ? 1 : -1;
        } else {
          throw new Error('Array must contain only strings or numbers');
        }
      });
      return sortedArray;
    }
    throw new Error('Direction must be either "asc" or "dsc"');
  }

}
