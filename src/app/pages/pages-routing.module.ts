import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { FormComponent } from './form/form.component';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';
import { ArticleNewComponent } from './article-new/article-new.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

const routes: Routes = [{
  path: '',
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/article/:id', component: ArticleComponent},
    {path: 'blog/newArticle', component: ArticleNewComponent},
    {path: 'blog/updateArticle/:id', component: ArticleEditComponent},
    {path: 'blog/search/:search', component: SearchComponent},
    {path: 'form', component: FormComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},

    {path: '**', redirectTo: 'home'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
