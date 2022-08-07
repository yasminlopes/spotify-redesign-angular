import { Injectable } from '@angular/core';
import { SpotifyConfig } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js'
import { IUsuario } from '../Interfaces/IUsuario';
import { SpotifyUserParaUsuario } from '../common/spotifyHelper';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;

  constructor() { 
    this.spotifyApi = new Spotify();

  }

  async iniciandoUsuario(){
    if(!!this.usuario)
    return true;

    const token = localStorage.getItem('token');
    if(!token)
    return false;

    try {
      this.definirAccessToken(token);
      await this.getSpotifyUser()
      return !!this.usuario;

    }catch(ex){
      return false;
    }
  }

  async getSpotifyUser(){
    const userInfo = await this.spotifyApi.getMe();
    this.usuario = SpotifyUserParaUsuario(userInfo)
  }

/* LOGIN AUTH SPOTIFY */
  getLoginUrl(){
    const authEndpoint = `${SpotifyConfig.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfig.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfig.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfig.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType; 
  }

  /* OBTENDO O TOKEN CALLBACK */
    getTokenUrlCallback(){
    if(!window.location.hash)
      return '';
      
      const params = window.location.hash.substring(1).split('&');
      return params[0].split('=')[1];

      return ''
  }

  /* DEFINIR TOKEN DE ACESSO */
  definirAccessToken(token: string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    //this.spotifyApi.skipToNext();
  }
  }


