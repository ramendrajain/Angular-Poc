import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ListService{
    constructor(private _http: HttpClient){

    }
    getCharacters(){
        return this._http.get('https://rickandmortyapi.com/api/character')
    }
    getAllFilterList(){
        let filter = [
          {
            name: 'Species',
            items:[{name:'Human',selected:false}, {name:'Mytholog',selected:false},{name:'Other Species',selected:false}]
          },
          {
            name:'Gender',
            items:[{name:'Male',selected:false},{name:'Female',selected:false}]
          },
          {
            name: 'Origin',
            items:[{name:'Unknown',selected:false},{name:'Post Apocalyptic Earth',selected:false}, {name:'Nuptia 4',selected:false},{name:'Other Origins',selected:false}]
          }
        ]
        return filter;
      }
}
