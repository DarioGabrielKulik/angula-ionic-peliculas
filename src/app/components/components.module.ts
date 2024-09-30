import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideComponent } from './slide/slide.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlidePosterComponent } from './slide-poster/slide-poster.component';
import { SlideParComponent } from './slide-par/slide-par.component';
import { ParesPipe } from '../pipes/pares.pipe';
import { DetallerComponent } from './detaller/detaller.component';
import { FavoritosComponent } from './favoritos/favoritos.component';



@NgModule({
 
  declarations: [ FavoritosComponent, SlideComponent, SlidePosterComponent, SlideParComponent, DetallerComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    ParesPipe

  ],exports:[
    SlideComponent,
    SlidePosterComponent,
    SlideParComponent,
    DetallerComponent,
    FavoritosComponent
  ], schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
