import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListModuleRoutingModule } from './list-module-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    ListModuleRoutingModule,
    SharedModule
  ]
})
export class ListModuleModule { }
