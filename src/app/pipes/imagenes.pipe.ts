import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath

@Pipe({
  name: 'imagenes',
  standalone: true
})
export class ImagenesPipe implements PipeTransform {

  

  transform(img: string, size: string = 'w500'): string {

    if(!img){
      return './assets/noImagen.jpg';
    }

    const imgUrl = `${URL}/${size}${img}`

    return imgUrl;
  }

}
