import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubService } from './github.service'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
