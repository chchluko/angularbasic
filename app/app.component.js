System.register(['angular2/core', './model/pelicula'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pelicula_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Catalogo";
                    this.mostrar_datos = false;
                    this.pelicula = new pelicula_1.Pelicula(2, 'La verdad duele', 'Will Smith', 2015);
                    this.peliculas = [
                        new pelicula_1.Pelicula(1, 'Batman v. Superman', "Zack Snider", 2016),
                        new pelicula_1.Pelicula(2, 'La verdad duele', 'Will Smith', 2015),
                        new pelicula_1.Pelicula(3, 'Una historia real', 'Desconocido', 2014),
                    ];
                    this.debug();
                }
                AppComponent.prototype.debug = function (titulo) {
                    if (titulo === void 0) { titulo = null; }
                    if (titulo != null) {
                        console.log(this.pelicula.pelicula);
                    }
                    else {
                        console.log(this.pelicula);
                    }
                };
                AppComponent.prototype.onShowHide = function (value) {
                    this.mostrar_datos = value;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //template en linea o un fichero
                        /*template: `<h1>{{ titulo }}</h1>
                                    <ul>
                                    <li>Pelicula: <strong>{{pelicula}}</strong></li>
                                    <li>Director: <strong>{{director}}</strong></li>
                                    <li>Año: <strong>{{year}}</strong></li>
                                    </ul>` */ // html dentro del componente
                        templateUrl: "app/view/peliculas.html",
                        styleUrls: ["../assets/css/styles.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map