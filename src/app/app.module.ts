import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { AllArticleComponent } from './all-article/all-article.component';
import { LoggInComponent } from './logg-in/logg-in.component';
import { CreateArticleComponent} from './create-article/create-article.component';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LatestArticleComponent,
    AllArticleComponent,
    LoggInComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
