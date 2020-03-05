import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
// import {MatCardModule} from '@angular/material/card';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatListModule} from '@angular/material/list';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import { FilterComponent } from './components/filter/filter.component';
// import { ChipsComponent } from './components/chips/chips.component';
// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';
import { FilterComponent } from './components/filter/filter.component';
// import { SearchPipe } from './pipes/search.pipe';
// import { PaginationComponent } from './components/pagination/pagination.component';
// import { ElaspedTimePipe } from './pipe/elasped-time/elasped-time.pipe';
// import { SortPipe } from './pipe/sort/sort.pipe';
@NgModule({
  declarations: [SortPipe, FilterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports:[
    FlexLayoutModule,
    FormsModule,
    SortPipe,
    FilterComponent
  ]
})
export class SharedModule { }
