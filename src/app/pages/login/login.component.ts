import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback() {
    const token = this.spotifyService.getTokenUrlCallback();
    if(!!token){
      this.spotifyService.definirAccessToken(token);
    }
  }

  btnLoginClick(){
    window.location.href = (this.spotifyService.getLoginUrl());
    
  }

  openLoginPage(){
    window.location.href = this.spotifyService.getLoginUrl();
  }

}
