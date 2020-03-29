import { Component, OnInit } from '@angular/core';
import { ObjectService} from '../object.service';
import { BlogInterface } from '../blog-interface';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  Article: BlogInterface[];
 
  constructor(public ObjectService:ObjectService) { }

  ngOnInit(): void {
    this.Article=this.ObjectService.getStartlatestArticle();
    
    
  }

}
