import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-crawl',
  templateUrl: './create-crawl.component.html',
  styleUrls: ['./create-crawl.component.css']
})
export class CreateCrawlComponent implements AfterViewInit {
  @ViewChild('logoTextArea') logoTextArea!: ElementRef;
  @ViewChild('logoTextAreaNgModel') logoTextAreaNgModel!: NgModel;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
      this.resizeTextAreaOnInit();
  }

  resizeTextAreaOnInit(): void {
    const textArea = this.logoTextArea.nativeElement;
    const modelValue = this.logoTextAreaNgModel.model;
    textArea.value = this.logo;
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight + 20}px`;
    console.log(textArea.style.height);
  }

  intro: string = 'A long time ago in a galaxy far, far away...';
  logo: string = 'STAR\nWARS';
  currentMovieTemplate: MovieTemplate = {
    title: '',
    subtitle: '',
    body: ""
  };

  movieTemplates: MovieTemplate[] = [
    {
      title: 'Episode I',
      subtitle: 'THE PHANTOM MENANCE',
      body: 
      'Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.' +
      '\nHoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.' +
      '\nWhile the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....'
    },
    {
      title: 'Episode II',
      subtitle: 'ATTACK OF THE CLONES',
      body: 
      'There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.' +
      '\nThis separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy.' +
      '\nSenator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....'
    },
    {
      title: 'Episode III',
      subtitle: 'REVENGE OF THE SITH',
      body: 
      'War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.' +
      '\nIn a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.' +
      '\nAs the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....'
    },
    {
      title: 'Episode IV',
      subtitle: 'A NEW HOPE',
      body: 
      'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.' +
      '\nDuring the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.' +
      '\nPursued by the Empire\'s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....'
    },
    {
      title: 'Episode V',
      subtitle: 'THE EMPIRE STRIKES BACK',
      body: 
      'It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.' +
      '\nEvading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.' +
      '\nThe evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....'
    },
    {
      title: 'Episode VI',
      subtitle: 'RETURN OF THE JEDI',
      body: 
      'Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.' +
      '\nLittle does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.' +
      '\nWhen completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...'
    },
    {
      title: 'Episode VII',
      subtitle: 'THE FORCE AWAKENS',
      body: 
      'Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.' +
      '\nWith the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.' +
      '\nLeia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke\'s whereabouts....'
    },
    {
      title: 'Episode VIII',
      subtitle: 'THE LAST JEDI',
      body: 
      'The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy.' +
      '\nOnly General Leia Organa\'s band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight.' +
      '\nBut the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....'
    },
    {
      title: 'Episode IX',
      subtitle: 'THE RISE OF SKYWALKER',
      body: 
      'The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE.' +
      '\nGENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER.' +
      '\nMeanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power....'
    }
  ]

  disableButton(): boolean {
    return !this.intro || !this.logo || !this.currentMovieTemplate.body || !this.currentMovieTemplate.title || !this.currentMovieTemplate.subtitle || this.showInvalidMessage();
  }

  showInvalidMessage(): boolean {
    return this.logo.split('\n').length > 2;
  }

  generateCrawl(): void {
    const content = {
      intro: this.intro,
      logo: this.logo,
      title: this.currentMovieTemplate.title,
      subtitle: this.currentMovieTemplate.subtitle,
      body: this.currentMovieTemplate.body
    }
    this.router.navigate(['/generated-crawl'], {queryParams: content});
  }

  resizeTextArea(event: Event): void {
    const textArea = event.target as HTMLTextAreaElement;
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`;
    console.log(textArea.style.height);
  }
}

interface MovieTemplate {
  title: string;
  subtitle: string;
  body: string;
}