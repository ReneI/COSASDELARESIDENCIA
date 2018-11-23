import { URL_SERVICIO } from '../config/config';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, args?: any): any {
   let url = URL_SERVICIO + '/img';

   
    return url;
  }

}
