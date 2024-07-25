import { Injectable } from '@nestjs/common';
import { Artista } from 'src/artista';

@Injectable()
export class ArtistasService {
    private artistas: Artista[] = [];

    crearArtista(artista: Artista): void {
        artista.id = this.artistas.length + 1;
        this.artistas.push(artista);
    }
    obtenerArtistas(): Artista[] {
        return this.artistas;

    } editArtista(id: number, artista: Artista): void {
        let artistaEncontrado = this.buscarArtistaPorId(id);
        artistaEncontrado.nombre = artista.nombre;
        artistaEncontrado.biografia = artista.biografia;
        artistaEncontrado.pais = artista.pais;
        artistaEncontrado.generoMusical = artista.generoMusical;
        artistaEncontrado.oyentesMensuales = artista.oyentesMensuales;
        artistaEncontrado.tipo = artista.tipo;
        artistaEncontrado.verificado = artista.verificado;
    }
    buscarArtistaPorId(id: number): Artista {
        for (let i = 0; i < this.artistas.length; i++) {
            if (this.artistas[i].id == id) {
                return this.artistas[i];
            }
        }
        return null;
    }
    eliminarArtista(id: number): void {
        for (let i = 0; i < this.artistas.length; i++) {
            if (this.artistas[i].id == id) {
                this.artistas.splice(i, 1);
            }
        }
    }

}
