import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'demo-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  allCharacters:any[];
  allData:any[];
  sortOrder: string;
  searchName: string;
  filterList:any[];
  selectedFilter:any[]=[];
  constructor(private _listService: ListService) { }

  ngOnInit(): void {
    this.filterList = this._listService.getAllFilterList();
    this.getAllCharacters();
  }
   
  getAllCharacters(){
    this._listService.getCharacters().subscribe(
      (res:any)=>{
        console.log(res)
        this.allCharacters = res.results;
        this.allData = res.results;
      },
      err=>{
        console.log(err)
      }
    )
  }
  
  searchUserName(){
    if(this.searchName){

      this.allCharacters =[...this.allData.filter(item=>item.name.toLowerCase().indexOf(this.searchName.toLowerCase()) >-1)]
    }else{
      this.allCharacters = [...this.allData]
    }
  }
  filterChange(evt){
    console.log(evt);
    let index = this.selectedFilter.findIndex(sFilter=> sFilter.item === evt.item);
    if(index === -1){
      this.selectedFilter.push(evt);
    }else{
     let mainCat =  this.filterList.find(item=> item.name === this.selectedFilter[index].name.name);
     let subItem = mainCat.items.find(sItem=> sItem.name === this.selectedFilter[index].item.name);
     subItem.selected = false;
      this.selectedFilter.splice(index,1);
    }
    // this.getAllCharacters(this.page.currentpage);
  }
}
