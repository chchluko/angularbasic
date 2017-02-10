System.register(['angular2/core', './components/peliculas-list.component', './components/footer.component'], function(exports_1, context_1) {
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
    var core_1, peliculas_list_component_1, footer_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (peliculas_list_component_1_1) {
                peliculas_list_component_1 = peliculas_list_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Catalogo";
                }
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
                        directives: [peliculas_list_component_1.PeliculasListComponent, footer_component_1.FooterComponent],
                        templateUrl: "app/view/peliculas.html" //plantilla desde una plantilla html remota
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