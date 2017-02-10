// Importar el núcleo de Angular
import {Component} from 'angular2/core';
//import {Pelicula} from './model/pelicula';
import {PeliculasListComponent} from './components/peliculas-list.component';
import {FooterComponent} from './components/footer.component';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',   //donde se carga el componente en que etiqueta
    //template en linea o un fichero
    /*template: `<h1>{{ titulo }}</h1>
    			<ul>
				<li>Pelicula: <strong>{{pelicula}}</strong></li>
				<li>Director: <strong>{{director}}</strong></li>
				<li>Año: <strong>{{year}}</strong></li>
    			</ul>` */  // html dentro del componente
    directives: [PeliculasListComponent, FooterComponent],
    templateUrl: "app/view/peliculas.html" //plantilla desde una plantilla html remota
    //styleUrls: ["../assets/css/styles.css"]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent{ 
	public titulo:string = "Catalogo";
	

}