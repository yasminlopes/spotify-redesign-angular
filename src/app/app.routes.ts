import { Routes } from "@angular/router";

export const AppRotas: Routes = [

  /* Redicionando o Path Vazio para: */
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' /*Significa que o nome da rota tem que ser exatamente ao que foi escrito pra ser redirecionado */
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
  
  }
]
