import { Injectable } from '@angular/core';
import { Question } from './question'
import { QUESTIONS } from "./question/questions-mock";

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  questions: Question[]= QUESTIONS;
  Question: Question[];

  constructor() { }


}