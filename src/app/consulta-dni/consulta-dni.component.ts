import { Component, OnInit } from '@angular/core';
import { ReniecService } from '../reniec.service';
@Component({
  selector: 'app-consulta-dni',
  templateUrl: './consulta-dni.component.html',
  styleUrls: ['./consulta-dni.component.scss']
})

export class ConsultaDniComponent {
  dni='';
  Datos={
    apellidoMaterno:'',
    apellidoPaterno:'',
    nombres:''
  }
  constructor(private reniecService: ReniecService) { }

  consultarDNI() {
    this.reniecService.consultarDNI(this.dni)
      .subscribe((response: any) => {
        this.Datos.nombres=response.nombres;
        this.Datos.apellidoMaterno=response.apellidoMaterno;
        this.Datos.apellidoPaterno=response.apellidoPaterno;
      });
  }
  
}
