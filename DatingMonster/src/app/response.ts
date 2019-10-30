export class Response {
    text: string;
    idQuestion: number;
    seduction: number;

    constructor(text: string, idQuestion: number, seduction: number)
    {
        this.text = text;
        this.idQuestion = idQuestion;
        this.seduction = seduction;
    }
}
