import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesPipe } from './imagenes.pipe';
import { ParesPipe } from './pares.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImagenesPipe,
    ParesPipe
    
  ],exports:[
    ImagenesPipe,
    ParesPipe
  ]
})
export class PipesModule { }
