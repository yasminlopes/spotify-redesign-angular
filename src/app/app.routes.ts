import { RouteConfigLoadEnd, Routes } from "@angular/router";
import { AutenticacaoGuard } from "./guards/autenticacao.guard";

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
  
  },

  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then(x => x.PlayerModule),
    canLoad: [AutenticacaoGuard]
  }
]
