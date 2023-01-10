import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'signup',
  //   pathMatch: 'full'
  // },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgotpw',
    loadChildren: () => import('./pages/forgotpw/forgotpw.module').then( m => m.ForgotpwPageModule)
  },
  {
    path: 'userprofile',
    loadChildren: () => import('./pages/userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },  {
    path: 'petinfo',
    loadChildren: () => import('./pages/petinfo/petinfo.module').then( m => m.PetinfoPageModule)
  },
  {
    path: 'vaccination',
    loadChildren: () => import('./pages/vaccination/vaccination.module').then( m => m.VaccinationPageModule)
  },
  {
    path: 'deworming',
    loadChildren: () => import('./pages/deworming/deworming.module').then( m => m.DewormingPageModule)
  },
  {
    path: 'heartworm',
    loadChildren: () => import('./pages/heartworm/heartworm.module').then( m => m.HeartwormPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
