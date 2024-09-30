import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Genre, Pelicula } from '../interfaces/interfacesDetallePeliculas';
import { StorageService } from '../services/storage.service';
import { GeneroConPeliculas, Results } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  peliculas:Pelicula[] = [];

  constructor(private _storage:StorageService, private _api:ApiService){
  }

  ngOnInit(){
   this.traerPeliculas();
  }

  traerPeliculas(){
    this._storage.cargarFavoritos().then( data => {
      this.peliculas = data
    })
  }

}
