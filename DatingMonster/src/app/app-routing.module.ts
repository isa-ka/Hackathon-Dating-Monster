import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ResponsesComponent } from './responses/responses.component';
import { QuestionComponent } from './question/question.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  //{path: 'formulaire', component: FormulaireComponent},
  //{ path: 'reponse', component: ResponsesComponent},
  //{ path: 'question', component: QuestionComponent},
  { path: 'game', component: GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };
