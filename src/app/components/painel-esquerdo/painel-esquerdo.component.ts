import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {
  
  // Btn Selecionado
  btnSelecionado = 'Home'

  // Font Awesome Icons
  homeIcone = faHome;
  pesquisarIcone = faSearch;
  artistaIcone = faGuitar;
  playlistIcone = faMusic

  constructor() { }

  ngOnInit(): void {
  }
  

  btnClick(botao: string){
    this.btnSelecionado = botao;
  }

}
