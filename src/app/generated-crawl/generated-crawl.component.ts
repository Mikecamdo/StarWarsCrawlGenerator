import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
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

  screenWidth: number;

  beginAnimation: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.audio = new Audio(this.audioUrl);
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.screenWidth = window.innerWidth;
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
      });
    });
  }

  ngOnDestroy(): void {
      this.audio.pause();
      this.audio.currentTime = 0;
  }

  getLogoColor() {
    return {
      'text-shadow': `-2px -2px 0 ${this.logoColor}, 2px -2px 0 ${this.logoColor}, -2px 2px 0 ${this.logoColor}, 2px 2px 0 ${this.logoColor}`,
    };
  }

  getClassBasedOnWidth(section: number) {
    if (section === 1) {
      return {
        'intro-small-width': this.screenWidth < 570,
        'intro-medium-width': this.screenWidth >= 570 && this.screenWidth < 850,
        'intro-large-width': this.screenWidth >= 850
      };  
    } else if (section === 2) {
      return {
        'logo-small-width': this.screenWidth < 570,
        'logo-medium-width': this.screenWidth >= 570 && this.screenWidth < 850,
        'logo-large-width': this.screenWidth >= 850
      };  
    } else { //if section ===3
      return {
        'text-small-width': this.screenWidth < 570,
        'text-medium-width': this.screenWidth >= 570 && this.screenWidth < 850,
        'text-large-width': this.screenWidth >= 850
      };  
    }
  }

  startCrawl(): void {
    this.beginAnimation = true;
    this.audio.play();
  }
}
