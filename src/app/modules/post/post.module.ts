import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';

import { PostComponent } from 'src/app/components/post/post.component';
import { AddPostComponent } from 'src/app/components/post/add-post/add-post.component';

import { SharedModule } from '../shared/shared.module';
import { FormMaterialModule } from '../material/form-material.module';
import { FilterBarComponent } from 'src/app/components/post/filter-bar/filter-bar.component';


@NgModule({
  declarations: [
    PostComponent,
    AddPostComponent,
    FilterBarComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    // Shared
    SharedModule,
    FormMaterialModule,
  ]
})
export class PostModule { }
