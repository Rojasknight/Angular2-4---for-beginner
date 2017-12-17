//MOdulo para trabjar con formularios
import { FormsModule } from '@angular/forms';
//Modulos para hacer rutas
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { Error404Component } from './error-404/error-404.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';

//Añadir esta linea cada vez que creemos un servicio y agregarlos a los providers.
import { LibrosseleccionadosService } from './librosseleccionados.service';




//Constate para las rutas
const rutasApp: Routes = [
  { path: 'listar-libros', component: ListaDeLibrosComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'error-404', component:  Error404Component},
  { path: 'detalle', redirectTo:  'listar-libros'},
  { path: 'detalle/:libroid', component:  DetalleLibroComponent},
  //ruta para cuando no elusuario entra a una ruta incorrecta.
  { path: '', component: PaginaInicioComponent, pathMatch: 'full' },
  //ruta para cuando la ruta no existe.
  { path: '**', redirectTo: 'error-404' },
  //{ path: '404', component: Pagina404ErrorComponent },

  /**
  //Pagina Principal
  { path: '', component: PaginaPrincipalComponent, pathMatch: 'full' },
  //Cuando no encuentre una ruta
  { path: '**', redirectTo: '404' },
  */
]

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EncabezadoComponent,
    ListaDeLibrosComponent,
    PaginaInicioComponent,
    Error404Component,
    DetalleLibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutasApp),
  ],
  providers: [
    LibrosseleccionadosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
