import { Cancion } from './cancion';
import { Usuario } from './usuario';

export class Playlist {
    constructor(
        public id: number,
        public nombre: string,
        public canciones: Cancion[],
        public duracion: number,
        public seguidores: number,
        public creador: Usuario) { }
}