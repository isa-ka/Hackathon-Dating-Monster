import { Injectable } from '@angular/core';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  responses: Response[] = 
  [
    new Response('Tu es bien plus effrayant en vrai', 0, 10),
    new Response('Tu es bien plus beau en vrai', 0, -5),
    new Response('Non ça va', 0, 0),
    new Response('Bloody Mary', 1, 10),
    new Response('Monster', 1, 0),
    new Response('Une Belzebuth', 1, -5),
    new Response("C'est marrant t'as plus une tête à faire peur aux mémés", 2, 0),
    new Response("C'est marrant t'as plus une tête à posseder des gens", 2, 10),
    new Response("C'est marrant t'as plus une tête à chasser les monstres", 2, -5),
    new Response("Moi dans deux siècles je me vois chez Paul Emploi", 3, 0),
    new Response("Moi dans deux siècles je me vois six pieds sous terre", 3, -5),
    new Response("Moi dans deux siècles je me vois Maitre des enfers", 3, 10),
    new Response("Il y a ce nouveau club Lucifer, ça te dit d'y faire un tour ?", 4, 10),
    new Response("On va au cimetière", 4, -50),
    new Response("Je danse une valse endiablée", 5, 0),
    new Response("Je danse un tango enflammé", 5, 10),
    new Response("Je fais la danse des canards", 5, -5),
    new Response("Je le drague", 6, -5),
    new Response("Je lui parle de techniques de monstres", 6, 10),
    new Response("Je lui parle du beau temps", 6, 0),
    new Response("Je les sépare", 7, -5),
    new Response("Je plante un pieu dans le coeur de l’autre", 7, 10),
    new Response("Je jette mon verre à l’autre", 7, 0),
    new Response("Lov’Hotel", 8, -50),
    new Response("Cimetière", 8, 10),
    new Response("C'était une soirée parfaite", 9, -5),
    new Response("Moi aussi", 9, 0),
    new Response("C'était désastreux", 9, 10),
    new Response("Je peux pas je suis en collocation en fausse commune", 10, -5),
    new Response("J’ai un caveau 4 places viens donc chez moi", 10, 10),
    new Response("Oui !", 11, 10),
    new Response("Non !", 11, -50),
  ]

  responsesIndexQuestion: Response[] = [];

  constructor() { }

  showResponses(index: number)
  {
    for(let i = 0; i < this.responses.length; i++)
    {
      if(this.responses[i].idQuestion == index)
      {
        this.responsesIndexQuestion.push(this.responses[i]);
      }
    }
    return this.responsesIndexQuestion;
  }
}