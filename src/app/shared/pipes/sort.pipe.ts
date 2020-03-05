import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(data: any[], ...args: any[]) {
    let attrName = args[0];
    let sort = args[1];
    if(!data || !data.length || !attrName) return data;
    data.sort((p1,p2)=>{
if(p1[attrName]<p2[attrName]) return sort==='desc' ? 1:-1;
if(p1[attrName]>p2[attrName]) return sort==='desc' ? -1:1;
return 0;

    })
    if(args[2]){
      data.filter(item=>item.name===args[2])
    }
    return data;

  }

}
