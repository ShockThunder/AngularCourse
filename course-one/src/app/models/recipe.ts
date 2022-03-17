import { Ingridient } from "./ingridient";

export class Recipe {
    public name: string;
    public decription: string;
    public imagePath: string;
    public ingridients: Ingridient[];
    /**
     *
     */
    constructor(name: string, description: string, imagePath: string, ingridients: Ingridient[]) {
        this.name = name;
        this.decription = description;
        this.imagePath = imagePath;
        this.ingridients = ingridients;
    }
}