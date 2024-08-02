import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {

  imageGallaryList = [
    {
      name: 'Image 1',
      url: 'https://picsum.photos/id/237/200/300',
    },
    {
      name: 'Image 2',  
      url: 'https://picsum.photos/id/238/200/300',
    },
    {
      name: 'Image 3',
      url: 'https://picsum.photos/id/239/200/300',
    },
  ]
}
