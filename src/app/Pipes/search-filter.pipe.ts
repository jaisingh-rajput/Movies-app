import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    return value.filter(function (search:any){
      return search.original_title.indexOf(searchTerm)>-1
    })
  }

}
