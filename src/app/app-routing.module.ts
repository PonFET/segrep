import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'fixes',
    loadChildren: () => import('./fixes/fixes.module').then(m => m.FixesModule),
  },
  {
    path: '**',
    redirectTo: 'users/dashboard',
  },
  {
    path: '',
    redirectTo: 'users/dashboard',
    pathMatch: 'full',
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
