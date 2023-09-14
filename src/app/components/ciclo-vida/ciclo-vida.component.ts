import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.scss']
})
export class CicloVidaComponent implements
OnInit, //Se ejecuta después que se haya inicializado el componente.
OnChanges, // Se ejecuta cuando cambian los datos de entrada del componente
DoCheck, // Se ejecuta en cada verificación de cambios
AfterContentInit, // Se ejecuta despues que angular haya inicializado el contenido proyectado
AfterContentChecked, //Se ejecuta despues de verificar el contenido proyectado y sus componentes hijos
AfterViewInit, // Se ejecuta despues que angulas haya inicializado las vistas del componente y sus hijos
AfterViewChecked, // Se ejecuta despues que angular haya verificado la vista del componente y sus hijos 
OnDestroy // Se ejecuta justo antes que angular destruya el componente, sirve para matar suscripciones o cualquier servicio vivo.
{

  //Declaración de variables
  public MiString : string = "";
  public MiInputValue : string = "";
  public MiNumber : number = 0;
  public MiBoolean : boolean = false;
  public MiDynamic : any;
  public MiArray : Array<[]> = [];
  public MiArray2 : string[] = ["Daniel", "Pedro"]
  public MiArray3 : any = [];
  public MiObject : any = {};
  public MiArrayObject : Array<any> = [{},{},{}]

  //Constructor en angular se usa principalmente para la inicialización de la clase
  //o el componente o incluso el servicio.
  //Normalmente aquí su función principal es preparar la inyección de dependencias del componente o servicio
  //antes que se use, pero ojo , no está relacionado directamente con el ciclo de vida.
  //Casos de uso comunes para el constructos
  // -> inicialización de propiedades
  // -> inicialización de dependencias (inyección de dependencias)
  // -> configuración inicial
  constructor()
  {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }  

}
