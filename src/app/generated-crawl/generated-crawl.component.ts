import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generated-crawl',
  templateUrl: './generated-crawl.component.html',
  styleUrls: ['./generated-crawl.component.css']
})
export class GeneratedCrawlComponent implements OnDestroy, OnInit {
  topIntro: string = '';
  bottomIntro: string = '';
  topLogo: string = '';
  bottomLogo: string = '';
  title: string = '';
  subtitle: string = '';
  body: string[] = [];

  introColor: string = '';
  logoColor: string = '';
  textColor: string = '';

  audio: HTMLAudioElement;
  audioUrl: string = 'https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3';

  constructor(private route: ActivatedRoute) {
    this.audio = new Audio(this.audioUrl);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let introParts: string[] = params['intro'].split('\n');
      this.topIntro = introParts[0];
      this.bottomIntro = introParts[1];

      let logoParts: string[] = params['logo'].split('\n');
      this.topLogo = logoParts[0];
      this.bottomLogo = logoParts[1];

      this.title = params['title'];
      this.subtitle = params['subtitle'];

      this.introColor = params['introColor'];
      this.logoColor = params['logoColor'];
      this.textColor = params['textColor'];

      let paragraphs: string[] = params['body'].split('\n');
      paragraphs.forEach((paragraph) => {
        if (paragraph) { //only adds paragraph if it has content
          this.body.push(paragraph);
        }
      })
      this.audio.play();
    });
  }

  ngOnDestroy(): void {
      this.audio.pause();
      this.audio.currentTime = 0;
  }

  getLogoColor() {
    return {
      'text-shadow': `-0.5px -0.5px 0 ${this.logoColor}, 0.5px -0.5px 0 ${this.logoColor}, -0.5px 0.5px 0 ${this.logoColor}, 0.5px 0.5px 0 ${this.logoColor}`,
    };
  }
}
