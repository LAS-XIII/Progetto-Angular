import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormMaterialModule } from '../material/form-material.module';

import { SinglePostComponent } from 'src/app/components/single-post/single-post.component';
import { CommentsComponent } from 'src/app/components/single-post/comments/comments.component';
import { AddComComponent } from 'src/app/components/single-post/add-com/add-com.component';

@NgModule({
  declarations: [
    SinglePostComponent,
    CommentsComponent,
    AddComComponent
  ],
  exports: [
    SinglePostComponent,
    CommentsComponent,
    AddComComponent
  ],
  imports: [
    CommonModule,
    // Expansion
    MatExpansionModule,
    FormMaterialModule,
  ]
})
export class SharedModule { }
