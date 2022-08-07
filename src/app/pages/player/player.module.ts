import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { PainelEsquerdoComponent } from 'src/app/components/painel-esquerdo/painel-esquerdo.component';
import { BtnMenuComponent } from 'src/app/components/btn-menu/btn-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PlayerComponent,
   PainelEsquerdoComponent,
   BtnMenuComponent
  ],
  imports: [
    CommonModule,  
    RouterModule.forChild(PlayerRotas),
    FontAwesomeModule
  ]
})
export class PlayerModule { }
 