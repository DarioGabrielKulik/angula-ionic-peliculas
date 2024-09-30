import { Component, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Results } from 'src/app/interfaces/interfaces';
import { register } from 'swiper/element/bundle';
import { DetallerComponent } from '../detaller/detaller.component';
import { Pelicula } from 'src/app/interfaces/interfacesDetallePeliculas';

register();
@Component({
  selector: 'app-slide-poster',
  templateUrl: './slide-poster.component.html',
  styleUrls: ['./slide-poster.component.scss'],
})
export class SlidePosterComponent {

  @Input() peliculas:Pelicula[] = []

  constructor(private modalCtrl:ModalController) { }
  
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
