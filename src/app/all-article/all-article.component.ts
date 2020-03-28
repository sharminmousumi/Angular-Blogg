import { Component, OnInit } from '@angular/core';
import { ObjectService} from '../object.service';
import { BlogInterface } from '../blog-interface';

@Component({
  selector: 'app-all-article',
  templateUrl: './all-article.component.html',
  styleUrls: ['./all-article.component.css']
})
export class AllArticleComponent implements OnInit {
  Article: BlogInterface[];
  


  deleteArticleButton(data){
this.ObjectService.deleteData(data);
this.Article=this.ObjectService.getArticle();
  }
 
  constructor(public ObjectService:ObjectService) { }

  ngOnInit(): void {
    this.Article=this.ObjectService.getArticle();
  
  }

}
