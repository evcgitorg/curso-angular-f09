import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  
  public dataService : any;

  constructor
  (
    private _clientesService : ClientesService
  )
  {
    
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._clientesService.get().subscribe({
      next: (response)=> {
        console.log(response);
        this.dataService = response;
      },
      error: (error) => console.error(error)
    })
  }
}
