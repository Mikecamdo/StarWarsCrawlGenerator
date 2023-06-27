import { Component } from '@angular/core';

@Component({
  selector: 'app-create-crawl',
  templateUrl: './create-crawl.component.html',
  styleUrls: ['./create-crawl.component.css']
})
export class CreateCrawlComponent {
  intro: string = 'A long time ago in a galaxy far, far away...';
  logo: string = 'Star Wars';
  currentMovieTemplate: MovieTemplate = {
    title1: '',
    title2: '',
    body: ""
  };

  movieTemplates: MovieTemplate[] = [
    {
      title1: 'Episode I',
      title2: 'THE PHANTOM MENANCE',
      body: "1"
    },
    {
      title1: 'Episode II',
      title2: 'ATTACK OF THE CLONES',
      body: "2"
    },
    {
      title1: 'Episode III',
      title2: 'REVENGE OF THE SITH',
      body: "3"
    },
    {
      title1: 'Episode IV',
      title2: 'A NEW HOPE',
      body: "4"
    },
    {
      title1: 'Episode V',
      title2: 'THE EMPIRE STRIKES BACK',
      body: "5"
    },
    {
      title1: 'Episode VI',
      title2: 'RETURN OF THE JEDI',
      body: "6"
    },
    {
      title1: 'Episode VII',
      title2: 'THE FORCE AWAKENS',
      body: "7"
    },
    {
      title1: 'Episode VIII',
      title2: 'THE LAST JEDI',
      body: "8"
    },
    {
      title1: 'Episode IX',
      title2: 'THE RISE OF SKYWALKER',
      body: 
      'The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE.' +
      '\nGENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER.' +
      '\nMeanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power....'
    }
  ]
}

interface MovieTemplate {
  title1: string;
  title2: string;
  body: string;
}