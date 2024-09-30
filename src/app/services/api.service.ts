import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment.prod';
import { Pelicula } from '../interfaces/interfacesDetallePeliculas';
import { Actores } from '../interfaces/interfacesActores';


const URL = environment.url 
const apiKey = environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient)
  contador:number = 0
  constructor() {}

  getPopulares():Observable<any>{
    this.contador++; 
    const peliculasPopulares = URL + `/discover/movie?page=${this.contador}&sort_by=popularity.desc`

    const headers = new HttpHeaders({
      'Authorization': apiKey,
      'accept': 'application/json'
    });

    return this.http.get<RootObject>(peliculasPopulares, { headers });
  }
  getMovies():Observable <any> {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1 ,0).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;;
    
    if(mes < 10){
      mesString = '0' + mes;
    }else{
      mesString = mes;
    }

    const inicio = `${ hoy.getFullYear} - ${mesString} - 01`;
    const fin = `${ hoy.getFullYear} - ${mesString} - ${ultimoDia}`;

    const headers = new HttpHeaders({
      'Authorization': apiKey,
      'accept': 'application/json'
    });

    // const asd = `${URL}/discover/movie?language=es&primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`
    const asd = `${URL}/discover/movie?language=es&primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-01-30`

   return this.http.get<RootObject>(asd, { headers });
  }  
  getDetalles(id:number):Observable <any>{

    const headers = new HttpHeaders({
      'Authorization': apiKey,
      'accept': 'application/json'
    });

    const asd = `${URL}/movie/${id}?language=en-USS`

    return this.http.get<Pelicula>(asd, { headers });
  }
  getActores(id:number):Observable <any>{

    const headers = new HttpHeaders({
      'Authorization': apiKey,
      'accept': 'application/json'
    });

    const asd = `${URL}/movie/${id}/credits`

    return this.http.get<Actores>(asd, { headers });
  }
  getBuscarPeliculas(pelicula:string):Observable <any>{
    const headers = new HttpHeaders({'Authorization': apiKey,'accept': 'application/json'});
    const buscar = `${URL}/search/movie?query=${pelicula}&include_adult=false&language=en-US`
      return this.http.get<Pelicula>(buscar, {headers});
  }

  getGenero():Observable <any>{
    const headers = new HttpHeaders({'Authorization': apiKey,'accept': 'application/json'});
    const buscar = `${URL}/genre/movie/list?language=en`
      return this.http.get(buscar, {headers});
  }
}

