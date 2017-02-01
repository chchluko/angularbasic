// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from './model/pelicula';

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',   //donde se carga el componente en que etiqueta
    //template en linea o un fichero
    /*template: `<h1>{{ titulo }}</h1>
    			<ul>
				<li>Pelicula: <strong>{{pelicula}}</strong></li>
				<li>Director: <strong>{{director}}</strong></li>
				<li>Año: <strong>{{year}}</strong></li>
    			</ul>` */  //plantilla html dentro del componente

    templateUrl: "app/view/peliculas.html", //desde una plantilla html remota
    styleUrls: ["../assets/css/styles.css"]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	public titulo:string = "Peliculas";
	public pelicula = Pelicula;
	public mostrar_datos:boolean;

	constructor(){
		this.mostrar_datos=false;
		this.pelicula = new Pelicula(1, "carta", "prueba", 2016);
		this.debug();
		}

	debug(){
		console.log(this.pelicula);
	}

	onShowHide(value){
		this.mostrar_datos=value;
	}

	//public pelicula = new Pelicula(3, 'El Aura', 'Fabián Bielinsky', 2005);
 /*peliculas = [
    new Pelicula(1, 'Batman v. Superman', "Zack Snider", 2016),
    new Pelicula(2, 'La verdad duele', 'Will Smith', 2015),
    new Pelicula(3, 'Una historia real', 'Desconocido', 2014),
  ];*/


}