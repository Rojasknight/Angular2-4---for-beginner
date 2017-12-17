import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {

  libros: Array<object>;
  libroId: Number;
  libroSeleccionado: Object;

  constructor(private ruta:ActivatedRoute) {
    this.libros = [
      { id: '1', titulo: 'The Secret', autor: 'Juan Jaime' },
      { id: '2', titulo: 'La Vaca', autor: 'David' },
      { id: '3', titulo: 'Lavoragine', autor: 'Danny' },
      { id: '4', titulo: 'El Alquimista', autor: 'Sebas Jaime' },
    ];
  }

  ngOnInit() {
    this.ruta.params.subscribe(params =>{
      this.libroId = params['libroid'];
      this.libroSeleccionado = this.encontrarLibro();

    });
  }
  filtroPorID(libro){
    console.log(libro);
    return libro.id == this;
  }

  encontrarLibro(){
    return this.libros.filter(this.filtroPorID, this.libroId)[0];
  }
  


}


