import { Response } from './response';

export class Question {
    name: string;
    responses: Response[];

    constructor(name: string, responses: Response[])
    {
        this.name = name;
        this.responses = responses;
    }
}
