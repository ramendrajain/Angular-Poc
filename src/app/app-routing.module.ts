import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'displayDetails',
    pathMatch: 'full'
  },
  {
    path: 'displayDetails',
    loadChildren: () => import('./list-module/list-module.module').then(module => module.ListModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
