import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generated-crawl',
  templateUrl: './generated-crawl.component.html',
  styleUrls: ['./generated-crawl.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeOut', [
      transition(':leave', [
        animate(2000, style({ opacity: 0 }))
      ])
    ])
  ]
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
  animationOver: boolean = false;

  logoBig: boolean = false;
  logoMedium: boolean = false;
  logoSmall: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.audio = new Audio(this.audioUrl);
    this.screenWidth = window.innerWidth;
    this.setLogoSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.setLogoSize();
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
        'text-small-width': this.screenWidth < 570,
        'text-medium-width': this.screenWidth >= 570 && this.screenWidth < 850,
        'text-large-width': this.screenWidth >= 850
      };
    } else if (section === 3) {
      return {
        'subtitle-small-width': this.screenWidth < 570,
        'subtitle-medium-width': this.screenWidth >= 570 && this.screenWidth < 850,
        'subtitle-large-width': this.screenWidth >= 850
      };
    }
    return;
  }

  startCrawl(): void {
    this.setLogoSize();
    this.beginAnimation = true;
    this.animationOver = false;
    this.audio.addEventListener('ended', this.audioEnded);
    this.audio.play();
  }

  audioEnded = (): void => {
    this.animationOver = true;
    this.audio.removeEventListener('ended', this.audioEnded);
  }

  setLogoSize(): void {
    if (this.beginAnimation && !this.animationOver) { //if animation is in progress
      return;
    }

    if (this.screenWidth >= 950) {
      this.logoBig = true;
      this.logoMedium = false;
      this.logoSmall = false;
    } else if (this.screenWidth >= 600) {
      this.logoBig = false;
      this.logoMedium = true;
      this.logoSmall = false;
    } else {
      this.logoBig = false;
      this.logoMedium = false;
      this.logoSmall = true;
    }
  }
}
