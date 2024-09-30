import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Actores } from 'src/app/interfaces/interfacesActores';
import {  Pelicula } from 'src/app/interfaces/interfacesDetallePeliculas';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-detaller',
  templateUrl: './detaller.component.html',
  styleUrls: ['./detaller.component.scss'],
})
export class DetallerComponent implements OnInit  {
  @Input() id:number = 0 ;
  detallesPeliculas?: Pelicula;
  actoresPeliculas?: Actores;
  oculto:number = 150;
  isToastOpen = false;
  msg:string = ''
  color:string = ''
  name:string = 'star-outline'


  constructor(private modalCtrl:ModalController ,private _api:ApiService, private _storage:StorageService) { }

 ngOnInit(){
  this.conseguirActores();
  this.conseguirDetalles();
  this.estaFavorito();
 }

 regresar() {
  return this.modalCtrl.dismiss();
}

conseguirDetalles(){
  this._api.getDetalles(this.id).subscribe( data => {
    this.detallesPeliculas = data;
  })
}

conseguirActores(){
  this._api.getActores(this.id).subscribe( data => {
    this.actoresPeliculas = data;
  })
}



favorito(){
  const existe = this._storage.guardarPelicula(this.detallesPeliculas)  
  if(existe){
        this.color = 'warning'
        this.name = 'star'
  }else{
        this.color = ''
        this.name = 'star-outline'
  }

  this.ms();
}


setOpen(isOpen: boolean) {
  this.isToastOpen = isOpen;
}

ms(){
 this.msg = this._storage.msn() 
}

async estaFavorito(){

 await  this._storage.cargarFavoritos().then(data => {
  if( data.find( peli => peli.id === this.id)){
        this.color = 'warning'
        this.name = 'star'
  }else{
    this.color = ''
    this.name = 'star-outline'
  } 

  });
}
}
