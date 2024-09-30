import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfacesDetallePeliculas';
import { DetallerComponent } from '../detaller/detaller.component';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritosComponent   {

  @Input() peliculas:Pelicula[] = []
 

  constructor(private modalCtrl:ModalController) { }

  onClick(){

  }



  async verDetalles(id:number){
  
    const modal = await this.modalCtrl.create({
      component: DetallerComponent,
      componentProps:{
        id
      }
    })

    modal.present();

  }

}
