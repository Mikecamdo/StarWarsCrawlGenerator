import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCrawlComponent } from './create-crawl/create-crawl.component';
import { GeneratedCrawlComponent } from './generated-crawl/generated-crawl.component';

const routes: Routes = [
  { path: '', component: CreateCrawlComponent },
  { path: 'generated-crawl', component: GeneratedCrawlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
