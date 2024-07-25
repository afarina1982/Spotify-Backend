import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistasController } from './artistas/artistas.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { CancionesController } from './canciones/canciones.controller';
import { PlaylistsController } from './playlists/playlists.controller';
import { ArtistasService } from './artistas/artistas.service';

@Module({
  imports: [],
  controllers: [AppController, ArtistasController, UsuariosController, CancionesController, PlaylistsController],
  providers: [AppService, ArtistasService],
})
export class AppModule {}
