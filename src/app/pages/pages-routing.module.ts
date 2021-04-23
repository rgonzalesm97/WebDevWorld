import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { FormComponent } from './form/form.component';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{
  path: '',
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/article/:id', component: ArticleComponent},
    {path: 'blog/search/:search', component: SearchComponent},
    {path: 'form', component: FormComponent},
    {path: 'home', component: HomeComponent},


    {path: '**', redirectTo: 'home'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
