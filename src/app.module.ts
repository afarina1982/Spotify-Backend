import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistasController } from './artistas/artistas.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { CancionesController } from './canciones/canciones.controller';
import { PlaylistsController } from './playlists/playlists.controller';

@Module({
  imports: [],
  controllers: [AppController, ArtistasController, UsuariosController, CancionesController, PlaylistsController],
  providers: [AppService],
})
export class AppModule {}
