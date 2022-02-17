import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { educacion } from 'src/app/services/profesores.service';
import{ProfesorResponse} from 'src/app/Models/Profesor.models';
import{InscripcionesResponse} from 'src/app/Models/ListaInscripciones.models';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  profesores: ProfesorResponse[];
  incripciones: InscripcionesResponse[];
  proSeleccionado: ProfesorResponse;
  verSeleccion: ProfesorResponse;


  constructor(private router: Router, private servicioProfesor: educacion,) { }

  ngOnInit(): void {
    this.listaProfesores();
  }
  capturar(){
    this.verSeleccion = this.proSeleccionado;
    this.InscripcionesMateria(this.verSeleccion.id);
  }

  InscripcionesMateria(id: number){
    this.servicioProfesor.listarIncripciones(id).subscribe(datos =>{
      this.incripciones = datos;
    })
  }

  listaProfesores(){
    this.servicioProfesor.consultarProfesores().subscribe(data =>{
      this.profesores = data;
    })
  }

}
