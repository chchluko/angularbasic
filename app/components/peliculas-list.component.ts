import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';

@Component({
    selector: 'peliculas-list',
    templateUrl: "app/view/peliculas-list.html"
})

export class PeliculasListComponent{
    public pelicula:Pelicula;
    public peliculaElegida:Pelicula;
    public mostrar_datos:boolean;
    public peliculas;

    constructor(){
        this.mostrar_datos=false;
        this.peliculaElegida= new Pelicula(1, 'Batman v. Superman', "Zack Snider", 2016);
        //this.pelicula = new Pelicula(2, 'La verdad duele', 'Will Smith', 2015);
        this.peliculas = [
                        new Pelicula(1, 'Batman v. Superman', "Zack Snider", 2016),
                        new Pelicula(2, 'La verdad duele', 'Will Smith', 2015),
                        new Pelicula(3, 'Una historia real', 'Desconocido', 2014),
                        ];
                        this.pelicula = this.peliculas[0]; //manda la primera pelicula a favoritos
        this.debug();
        }

    debug(titulo=null){
        if(titulo != null) {
            console.log(this.pelicula.pelicula);
        }else{
            console.log(this.pelicula);
        }
    }

    onShowHide(value){
        this.mostrar_datos=value;
    }

    onCambiarPelicula(pelicula){
        this.pelicula = pelicula;
        this.peliculaElegida = pelicula;
    }
 }
