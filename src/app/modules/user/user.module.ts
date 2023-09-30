import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module'

import { FormMaterialModule } from 'src/app/modules/material/form-material.module';

import { UserComponent } from '../../components/user/user.component';
import { FilterBarComponent } from '../../components/user/filter-bar/filter-bar.component';
import { TableListComponent } from '../../components/user/table-list/table-list.component';
import { AddUserComponent } from '../../components/user/add-user/add-user.component';
import { UserDetailComponent } from '../../components/user-detail/user-detail.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent,
    FilterBarComponent,
    TableListComponent,
    AddUserComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    // Angular Material
    FormMaterialModule,
    // Shared
    SharedModule,
  ]
})
export class UserModule { }
