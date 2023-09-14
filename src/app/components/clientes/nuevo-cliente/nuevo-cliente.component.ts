import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {
  
  //Forma sencilla.
  public tipoDocumento: string = "";
  public noDocumento: string = "";
  public nombres: string = "";
  public apellidos: string = "";
  public correo: string = "";
  public telefono: string = "";
  public direccion: string = "";

  constructor(private _clientesService : ClientesService){}

  ngOnInit(): void {
    
  }

  submit(){
    const payload = {
      tipoDocumento : this.tipoDocumento,
      noDocumento : this.noDocumento,
      nombres : this.nombres,
      apellidos : this.apellidos,
      correo : this.correo,
      telefono : this.telefono,
      direccion : this.direccion
    }

    this._clientesService.post(payload).subscribe({
      next: (response)=>{
        console.log(response);
        alert("Cliente creado con exito");
      },
      error: (error) =>console.error(error)
    })

  }



}
