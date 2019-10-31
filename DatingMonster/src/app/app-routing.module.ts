import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
//import { ResponsesComponent } from './responses/responses.component';
//import { QuestionComponent } from './question/question.component';
import { GameComponent } from './game/game.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GameOverComponent } from './game-over/game-over.component';
import { VictoryComponent } from './victory/victory.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'formulaire', component: FormulaireComponent},
  { path: 'game', component: GameComponent},
  { path : 'gameover' , component : GameOverComponent},
  { path : 'victory' , component : VictoryComponent}
  //{ path: 'reponse', component: ResponsesComponent},
  //{ path: 'question', component: QuestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };
