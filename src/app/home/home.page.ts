import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public profiles = [];

  constructor() {

    this.profiles.push({
      image : 'https://image.flaticon.com/icons/png/128/56/56745.png',
      name : 'Andrés Haro',
      city : 'Tepic',
      likes : 0,
      love : 0,
      interests : [
        'Música', 'Juegos', 'Peliculas'
      ]
    });

    this.profiles.push({
      image : 'https://image.flaticon.com/icons/png/128/71/71748.png',
      name : 'Martin Jimenez',
      city : 'Tepic',
      likes : 0,
      love : 0,
      interests : [
        'Música', 'Deportes'
      ]
    });

    this.profiles.push({
      image : 'https://image.flaticon.com/icons/png/128/63/63699.png',
      name : 'Daniela Muñoz',
      city : 'Santa Maria del Oro',
      likes : 0,
      love : 0,
      interests : [
        'Harry Potter',  'Animales', 'Ejercicio'
      ]
    });

    this.profiles.push({
      image : 'https://image.flaticon.com/icons/png/128/56/56745.png',
      name : 'Manuel Almejo',
      city : 'Tepic',
      likes : 0,
      love : 0,
      interests : [
        'Codificación', 'Fiesta'
      ]
    });

    this.profiles.push({
      image : 'https://image.flaticon.com/icons/png/128/71/71748.png',
      name : 'Daniel High',
      city : 'Bellavista',
      likes : 0,
      love : 0,
      interests : [
        'Música', 'Juegos', 'Recreación'
      ]
    });

    this.profiles.push({
      image : 'https://image.flaticon.com/icons/png/128/63/63699.png',
      name : 'Martin Baez',
      city : 'Guasave',
      likes : 0,
      love : 0,
      interests : [
        'Cheerleader',  'Juegos', 'Ejercicio'
      ]
    });

    this.profiles.push({
      image : 'https://image.flaticon.com/icons/png/128/56/56745.png',
      name : 'Enrique Ortiz',
      city : 'Tepic',
      likes : 0,
      love : 0,
      interests : [
        'Juegos', 'Series'
      ]
    });

    this.profiles.push({
      image : 'https://image.flaticon.com/icons/png/128/71/71748.png',
      name : 'Edwin Arellano',
      city : 'Tepic',
      likes : 0,
      love : 0,
      interests : [
        'Tiro', 'Juegos', 'Milicia'
      ]
    });

    this.profiles.push({
      image : 'https://image.flaticon.com/icons/png/128/63/63699.png',
      name : 'Israel Arjona Vizcaino',
      city : 'Tepic',
      likes : 0,
      love : 0,
      interests : [
        'Dar clases',  'Ser el mejor profe'
      ]
    });

  }

  addLike(pos: number): void{
    this.profiles[pos].likes = this.profiles[pos].likes + 1;
  }

  addLove(pos: number): void{
    this.profiles[pos].love = this.profiles[pos].love + 1;
  }

}
