import { Component, OnInit } from '@angular/core';

//para hacer uso de un servicio hay que importarlo.
import { LibrosseleccionadosService } from '../librosseleccionados.service';


@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {

  libros:Array<Object>;

  constructor(public librosSeleccionados:LibrosseleccionadosService) { 
    this.libros = [
      { id: '1', titulo: 'The Secret', autor: 'Juan Jaime' },
      { id: '2', titulo: 'La Vaca', autor: 'David' },
      { id: '3', titulo: 'Lavoragine', autor: 'Danny' },
      { id: '4', titulo: 'El Alquimista', autor: 'Sebas Jaime' },
    ];
  }

  ngOnInit() {
  }

  agregarLibro(libro){
    this.librosSeleccionados.agregarLibros(libro);
  }

}
