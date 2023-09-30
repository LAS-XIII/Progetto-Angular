import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from '../../components/user/user.component';
import { UserDetailComponent } from '../../components/user-detail/user-detail.component';

const routes: Routes = [
  {path: "", component: UserComponent,},
  {path: ":userId", component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
