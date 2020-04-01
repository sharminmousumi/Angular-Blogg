import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { AllArticleComponent } from './all-article/all-article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { LoggInComponent } from './logg-in/logg-in.component';




const routes: Routes = [
  { path: 'start', component: StartComponent, pathMatch: 'full'},
  { path: 'Latest-Article', component: LatestArticleComponent, pathMatch: 'full'},
  { path: 'All-Article', component: AllArticleComponent, pathMatch: 'full'}, 
  { path: 'Create-Article', component: CreateArticleComponent, pathMatch: 'full'},
  { path: 'Logg-In', component: LoggInComponent, pathMatch: 'full' },
  { path: 'login', redirectTo: '/logga-in' }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
