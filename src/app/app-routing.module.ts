import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent, canActivate:[authGuard]},
  { path: "login", component: LoginComponent, canActivate:[authGuard]},
  { path: "user", loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), canActivate:[authGuard]},
  { path: "posts", loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule), canActivate:[authGuard]},
  { path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
