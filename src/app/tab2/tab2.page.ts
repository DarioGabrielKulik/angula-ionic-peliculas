import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Pelicula } from '../interfaces/interfacesDetallePeliculas';
import { ModalController } from '@ionic/angular';
import { DetallerComponent } from '../components/detaller/detaller.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar:string = '';
  ideas:string[] = ['spiderman', 'superman', 'robocop', 'la vida es bella']
  spinner:boolean = false;
  peliculas:Pelicula[] = []
  constructor(private _api:ApiService, private modalCtrl:ModalController) {}

  buscar(ev:any){
    console.log('click')
      const evento = ev.detail.value;
      this.spinner = true
      this._api.getBuscarPeliculas(evento).subscribe( data => {
        this.peliculas = data.results      
        console.log(data);
        this.spinner = false
      },(error)=>{
        console.log(error)
      })     
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
