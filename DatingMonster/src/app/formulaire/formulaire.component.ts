import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Monster } from '../monster';
import { FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  monsters: Monster[];
  color: string;
  value : string;
  cardMonster : boolean = false;
  preForms : boolean = true;
  currentRandomMonster: Monster;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getMonsters()
      .subscribe(response => {
        this.monsters = response.monsters
      })
  };

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  sendContact(){
    this.cardMonster=true;
    /* this.currentRandomMonster = this.monsters[Math.floor(Math.random() * this.monsters.length)];
    return this.currentRandomMonster; */
  }

  
}
