import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleComponent } from './article/article.component';
import { ArticleNewComponent } from './article-new/article-new.component';
import { BlogComponent } from './blog/blog.component';
import { ComponentsModule } from '../components/components.module';
import { ArticlesComponent } from './articles/articles.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { SearchComponent } from './search/search.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    HomeComponent,
    ArticleEditComponent,
    ArticleComponent,
    ArticleNewComponent,
    BlogComponent,
    ArticlesComponent,
    FormComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule,
    MomentModule,
    AngularFileUploaderModule,
    AuthModule
  ]
})
export class PagesModule { }
