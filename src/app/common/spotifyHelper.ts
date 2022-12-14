import { IPlaylist } from "../Interfaces/IPlaylist";
import { IUsuario } from "../Interfaces/IUsuario";

export function SpotifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario{
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.length ? user.images.pop().url : '',
    }

}

export function SpotifyPlaylistParaPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
  console.log(playlist)
  return{
    id: playlist.id,
    nome: playlist.name,    
    imagemUrl: playlist.images.length ? playlist.images.pop().url : '',
  };
}


