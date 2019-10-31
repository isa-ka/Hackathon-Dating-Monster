import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app-routing.module'
import { RouterModule,  } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar'

import { IndexComponent } from './index/index.component';
import { ResponsesComponent } from './responses/responses.component';
import { GameComponent } from './game/game.component';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { JaugeComponent } from './jauge/jauge.component';
import { GameOverComponent } from './game-over/game-over.component';
import { VictoryComponent } from './victory/victory.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    IndexComponent,
    ResponsesComponent,
    GameComponent,
    QuestionComponent,
    JaugeComponent,
    GameOverComponent,
    VictoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSliderModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
