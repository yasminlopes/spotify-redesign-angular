import { Component, Input, OnInit, Output } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/Interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {
  
  // Btn Selecionado
  btnSelecionado = 'Home'

  //
  playlists: IPlaylist[] = [];

  // Font Awesome Icons
  homeIcone = faHome;
  pesquisarIcone = faSearch;
  artistaIcone = faGuitar;
  playlistIcone = faMusic

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.searchPlaylists();
  }
  

  btnClick(botao: string){
    this.btnSelecionado = botao;
  }

  async searchPlaylists(){
    this.playlists = await this.spotifyService.searchUserPlaylist();
    
  }
}
