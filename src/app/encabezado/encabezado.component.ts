import { Component, OnInit } from '@angular/core';

//para hacer uso de un servicio hay que importarlo.
import { LibrosseleccionadosService } from '../librosseleccionados.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(public librosSeleccionados:LibrosseleccionadosService) { }

  ngOnInit() {
  }

}
