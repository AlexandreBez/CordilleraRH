import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Search', loadChildren: () => import('./company/search/search-company.module').then(m => m.SearchCompanyModule) },
  { path: 'NewNacionalContract', loadChildren: () => import('./company/new-nacional-contract/new-nacional-contract.module').then(m => m.NewNacionalContracModule) },
  { path: 'NewInternacionalContract', loadChildren: () => import('./company/new-internacional-contrac/new-international-contract.module').then(m => m.NewInternacionalContracModule) },
  { path: '', loadChildren: () => import('./company/nacional-solutions/nacional-solutions.module').then(m => m.NacionalSolutionsModule) },
  { path: '', loadChildren: () => import('./company/internacional-solutions/internacional-solutions.module').then(m => m.InternacionalSolutionsModule) },
  { path: '', loadChildren: () => import('./company/nacional-internacional-solutions/nacional-internacional.module').then(m => m.NacionalInternacionalSolutionsModule) },
  { path: '', loadChildren: () => import('./company/nacional-partnership/nacional-partnership.module').then(m => m.NacionalSolutionsModule) },
  { path: '', loadChildren: () => import('./company/internacional-partnership/internacional-partnership.module').then(m => m.InternacionalSolutionsModule) },
  { path: '', loadChildren: () => import('./company/nacional-internacional-partnership/nacional-internacional-partnership.module').then(m => m.InternacionalSolutionsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
