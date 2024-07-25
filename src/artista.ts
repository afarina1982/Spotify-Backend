export class Artista {
    constructor(
        public id: number,
        public nombre: string,
        public biografia: string,
        public pais: string,
        public generoMusical: string[],
        public oyentesMensuales: number,
        public tipo: string,
        public verificado: boolean) { }
}