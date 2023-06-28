import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCrawlComponent } from './create-crawl/create-crawl.component';
import { GeneratedCrawlComponent } from './generated-crawl/generated-crawl.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCrawlComponent,
    GeneratedCrawlComponent
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
