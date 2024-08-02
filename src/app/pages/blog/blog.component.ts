import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs: any[] = 
  [
    {
      "id": 1,
      "image": "asset/images/Dubai.jpg",
      "headline": "Exploring the Wonders of Dubai",
      "description": "Discover the stunning architecture, vibrant nightlife, and rich culture of Dubai in this comprehensive travel guide.",
      "readTime": "5 mins read"
    },
    {
      "id": 2,
      "image": "asset/images/Singapore.jpg",
      "headline": "A Journey Through Singapore's Hidden Gems",
      "description": "Unveil the lesser-known attractions of Singapore, from quaint neighborhoods to serene gardens.",
      "readTime": "3 mins read"
    },
    {
      "id": 3,
      "image": "asset/images/Tokyo.jpg",
      "headline": "Tokyo: A Blend of Tradition and Modernity",
      "description": "Experience the perfect blend of ancient traditions and cutting-edge technology in Tokyo.",
      "readTime": "4 mins read"
    },
    {
      "id": 4,
      "image": "asset/images/Bali.jpg",
      "headline": "Top 10 Must-Visit Spots in Bali",
      "description": "From stunning beaches to cultural landmarks, explore the top destinations in Bali.",
      "readTime": "2 mins read"
    },
    {
      "id": 5,
      "image": "asset/images/Maldives.jpg",
      "headline": "Maldives: A Paradise for Beach Lovers",
      "description": "Dive into the crystal-clear waters and enjoy the pristine beauty of the Maldives.",
      "readTime": "6 mins read"
    },
    {
      "id": 6,
      "image": "asset/images/NYC.jpg",
      "headline": "The Ultimate New York City Travel Guide",
      "description": "Navigate through the bustling streets of NYC with our ultimate travel guide.",
      "readTime": "7 mins read"
    },
    {
      "id": 7,
      "image": "asset/images/Paris.jpg",
      "headline": "Discovering the Magic of Paris",
      "description": "From the Eiffel Tower to charming cafes, immerse yourself in the magic of Paris.",
      "readTime": "7 mins read"
    },
    {
      "id": 8,
      "image": "asset/images/Sydney.jpg",
      "headline": "Adventures in the Swiss Alps",
      "description": "Experience the thrill of skiing and the beauty of the Swiss Alps.",
      "readTime": "7 mins read"
    }
  ]; 

}
