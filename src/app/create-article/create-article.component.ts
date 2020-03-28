import { Component, OnInit } from '@angular/core';
import { ObjectService} from '../object.service';
import { BlogInterface  } from '../blog-interface';
import { LogInOutService} from '../log-in-out.service';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  all:BlogInterface;
  lessons:boolean;
  loading:boolean=false;
  time:boolean;
  name:string;
  
  
  submitForm():void{
 this.ObjectService.addArticle(this.all);
 alert("New Articlelist has been added to the top of the article");
  }

  
  constructor(public ObjectService:ObjectService,public LogInOutService:LogInOutService) { }

  ngOnInit(): void {
    this.all=new BlogInterface("","","",null);
    this.LogInOutService.obBoolean.subscribe((data)=> {
      this.lessons=data;});
    
  
  }
  

}


