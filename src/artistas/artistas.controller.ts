import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Artista } from 'src/artista';
import { ArtistasService } from './artistas.service';

@Controller('artistas')
export class ArtistasController {

    constructor(private readonly servicio: ArtistasService) { }


    @Get()
    obtenerArtistas(): Artista[] {
        return this.servicio.obtenerArtistas();
    }
    @Get(':id')
    obtenerArtistaPorId(@Param('id') id: number): Artista {
        return this.servicio.buscarArtistaPorId(id);
    }

    @Post()
    agregarArtista(@Body() artista: Artista): void {
    this.servicio.crearArtista(artista);
    }

    @Delete(':id')
    eliminarArtista(@Param('id') id: number): void {
        this.servicio.eliminarArtista(id);
    }
    @Put(':id')
    editarArtista(@Param('id') id: number, @Body() artista: Artista): void {
      this.servicio.editArtista(id, artista);
    }
}
