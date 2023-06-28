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
      body: 
      'Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.' +
      '\nHoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.' +
      '\nWhile the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....'
    },
    {
      title1: 'Episode II',
      title2: 'ATTACK OF THE CLONES',
      body: 
      'There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.' +
      '\nThis separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy.' +
      '\nSenator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....'
    },
    {
      title1: 'Episode III',
      title2: 'REVENGE OF THE SITH',
      body: 
      'War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.' +
      '\nIn a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.' +
      '\nAs the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....'
    },
    {
      title1: 'Episode IV',
      title2: 'A NEW HOPE',
      body: 
      'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.' +
      '\nDuring the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.' +
      '\nPursued by the Empire\'s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....'
    },
    {
      title1: 'Episode V',
      title2: 'THE EMPIRE STRIKES BACK',
      body: 
      'It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.' +
      '\nEvading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.' +
      '\nThe evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....'
    },
    {
      title1: 'Episode VI',
      title2: 'RETURN OF THE JEDI',
      body: 
      'Luke Skywalker has returned to his home planet of Tatooine inan attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.' +
      '\nLittle does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.' +
      '\nWhen completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...'
    },
    {
      title1: 'Episode VII',
      title2: 'THE FORCE AWAKENS',
      body: 
      'Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.' +
      '\nWith the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.' +
      '\nLeia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke\'s whereabouts....'
    },
    {
      title1: 'Episode VIII',
      title2: 'THE LAST JEDI',
      body: 
      'The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy.' +
      '\nOnly General Leia Organa\'s band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight.' +
      '\nBut the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....'
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