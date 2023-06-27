import { Component } from '@angular/core';

@Component({
  selector: 'app-create-crawl',
  templateUrl: './create-crawl.component.html',
  styleUrls: ['./create-crawl.component.css']
})
export class CreateCrawlComponent {
  intro: string = 'A long time ago in a galaxy far, far away...';
  logo: string = 'Star Wars';
  title1: string = 'Episode IX';
  title2: string = 'THE RISE OF SKYWALKER';
  body: string = 
  `The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE.
GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER.
Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power....`;

}
