import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
    providedIn: 'root',
  })
export class PostService {
  listfPosts: Post[] = [
    new Post(
      'Nature1',
      'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
      'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
      'By test@test.com',
      new Date()
    ),
    new Post(
      'Hampi',
      'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.',
      'https://www.deccanherald.com/sites/dh/files/article_images/2019/03/15/Hampi-DH-1552611002.jpg',
      'By test@test.com',
      new Date()
    ),
    new Post(
      'Araku valley',
      "Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area's numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.",
      'https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg',
      'By test@test.com',
      new Date()
    ),
    new Post(
      'IPL T20',
      'The Indian Premier League is a professional Twenty20 cricket league, contested by eight teams based out of eight different Indian cities. The league was founded by the Board of Control for Cricket in India in 2007. Wikipedia      ',
      'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/07/917968-ipl.jpg',
      'By test@test.com',
      new Date()
    ),
  ];

  getPosts(){
      return this.listfPosts;
  }
  deletePost(index:number){
      this.listfPosts.splice(index,1);
  }

  addPost(post:Post){
      this.listfPosts.push(post)
  }
}
