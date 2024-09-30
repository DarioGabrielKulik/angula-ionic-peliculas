import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Results } from 'src/app/interfaces/interfaces';
import { DetallerComponent } from '../detaller/detaller.component';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfacesDetallePeliculas';

@Component({
  selector: 'app-slide-par',
  templateUrl: './slide-par.component.html',
  styleUrls: ['./slide-par.component.scss'],
})
export class SlideParComponent {

  
  @Input() peliculas:Pelicula[] = []
  @Output() cargarMas = new EventEmitter();

  constructor(private modalCtrl:ModalController) { }

  onClick(){
    this.cargarMas.emit();
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
