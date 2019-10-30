import { Component, OnInit, Inject } from '@angular/core';
import { GameService } from '../game.service';
import { Monster } from '../monster';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  monsters: Monster[];
  
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
  };
}
