import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: string[] = 
  ["Bonjour, désolé je ne ressemble pas vraiment à ma photo de profil.",
    "Tu veux boire quelque chose?",
    "Pour moi ce sera un wisky pur feu, j'ai écorché des gens toutes la journée.",
    "Et pourtant ça fait deux siècles que je fais ça et je compte bien continuer les deux prochains siècles.",
    "C'est ambitieux dis donc! Je me sens bien malheureux avec toi, on va trainer ailleurs ?",
    "Votre monstrueux partenaire se met à danser...",
    "Vous faites une pause, votre dating s'éloigne pour passer un appel. Un autre monstre vous abborde...",
    "Votre partenaire reviens, très en colère de vous voir discuter avec un autre monstre, il entame une bagarre...",
    "Après cette altércation vous décidez de partir, où allez vous ?",
    "J'ai passé une horrible soirée",
    "On va boire un dernier verre ?",
    "Voulez-vous hanter ses jours et ses nuits jusqu'à ce que l'appocalypse vous sépare? "
  ];
  firstQuestion: string = this.questions[0] 

  constructor() { }

  ngOnInit() {
    this.firstQuestion
  }
  

}
