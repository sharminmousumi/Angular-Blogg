import { Injectable } from '@angular/core';
import { BlogInterface } from './blog-interface';
@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  constructor() { }
  
  Article: BlogInterface[]=[
    {
      title:'Best Novels of All-Time', author:'Harper Lee', Events:'I try to carefully curate all of my reading lists and you can be sure that any novel on this page is worth your time. Enjoy!',
    time:20},
    {
      title:'Siddhartha', author:'Herman Hesse', Events:'the story was from childhood time.I passed a great time in my chilhood!',
    time:9},
    {
      title:'The Count of Monte Cristo', author:'Alexandre Dumas', Events:'The story is about frogien life. it is about mac and his life!',
    time:11},
    {
      title:'A Thousand Splendid Suns', author:'Khaled Hosseini', Events:'reading lists and you can be sure that any novel on this page is worth your time. Enjoy!',
    time:15},
    {
      title:'The Namesake', author:'Jhumpa Lahairy', Events:'cute girl cute boy. lists and you can be sure that any novel on this page is worth your time. Enjoy!',
    time:20},
    {
      title:'The Secret Life of Bees', author:'State of Wonder', Events:'the cll of my reading lists and you can be sure that any novel on this page is worth your time. Enjoy!',
    time:26}
  ]
  // show the last 4 articles by using slice method.If i add the new article show as a last article
  getLatestArticle(): BlogInterface[]{
    return this.Article.slice(0,4);
  }
  // show the all article
  getArticle(): BlogInterface[]{
    return this.Article;
  }
  // show the last article using slice method
  getStartlatestArticle(){
    return this.Article.slice(0, 1);

  }
  //add article to the top of the list by using unshift method
  addArticle(newArticle:any){
    this.Article.unshift(newArticle);
  }
  //delete the article from all article list
  deleteData(data){
    this.Article=this.Article.filter(item => item.title !== data) ;
  }
  
 
}

