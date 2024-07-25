import { Artista } from './artista';

export class Cancion {
    constructor(
        public id: number,
        public nombre: string,
        public duracion: number,
        public reproducciones: number,
        public generoMusical: string[],
        public artista: Artista,
        public album: string) { }
}