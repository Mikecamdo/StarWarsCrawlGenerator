import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generated-crawl',
  templateUrl: './generated-crawl.component.html',
  styleUrls: ['./generated-crawl.component.css']
})
export class GeneratedCrawlComponent {
  intro: string = '';
  logo: string = '';
  title: string = '';
  subtitle: string = '';
  body: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('THE PARAMS:')
      console.log(params);
      this.intro = params['intro'];
      this.logo = params['logo'];
      this.title = params['title'];
      this.subtitle = params['subtitle'];

      let paragraphs: string[] = params['body'].split('\n');
      console.log("THE PARAGRAPHS:")
      paragraphs.forEach((paragraph) => {
        if (paragraph) { //only adds paragraph if it has content
          this.body.push(paragraph);
        }
      })
    });
  }

}
