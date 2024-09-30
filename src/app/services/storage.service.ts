import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Pelicula } from '../interfaces/interfacesDetallePeliculas';
import { Results } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  pelicula: Pelicula [] = [];
  mensaje:string = '';
  constructor(private storage: Storage) {
    this.init();
    this.cargarFavoritos();
   }
  
   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
   }

   guardarPelicula(pelicula?:Pelicula){ 
  
      let existe = false;
      for(let peli of this.pelicula){
        if(peli.id === pelicula?.id){
          existe = true;
          break;
        }
      }

      if(existe){
        this.pelicula = this.pelicula.filter( peli => peli.id !== pelicula!.id);
        this.mensaje = 'Eliminada de Favoritos'               
      }else{
        this.pelicula.push(pelicula!)      
        this.mensaje = 'Agregada en Favoritos'
      }
      
      this._storage?.set('Pelicula', this.pelicula);
    return !existe;
  }

  msn(){
    return this.mensaje
  }

  async cargarFavoritos(){
    this.pelicula  = await this.storage.get('Pelicula') || []
  

   return this.pelicula;
  }

}

