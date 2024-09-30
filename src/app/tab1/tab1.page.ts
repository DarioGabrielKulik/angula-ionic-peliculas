import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Results } from '../interfaces/interfaces';
import { Pelicula } from '../interfaces/interfacesDetallePeliculas';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  peliculasRecientes: Pelicula[] = []
  peliculasPopulares: Pelicula[] = []

  constructor(private _api:ApiService) {}

  ngOnInit(){
    this.obtenerPeliculasPopulares();
    this.obtenerPeliculas();
    
  }

  obtenerPeliculasPopulares(){
    this._api.getPopulares().subscribe( resp=> {

      const areglo = [...this.peliculasPopulares, ...resp.results]
      this.peliculasPopulares = areglo ;

    },(error) => {
      console.log('Error:', error)
    });
  }


  obtenerPeliculas(){
    this._api.getMovies().subscribe(
      resp => {         
        this.peliculasRecientes = resp.results;    
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }


  cargarMas(){
    this.obtenerPeliculasPopulares();
  }
}