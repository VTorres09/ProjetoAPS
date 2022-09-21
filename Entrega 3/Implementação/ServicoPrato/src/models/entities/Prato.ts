class Prato {
    constructor(
        name: string,
        description: string,
        calories: number,
    ) {
        this.name = name;
        this.description = description;
        this.calories = calories;
    }

    name: string;
    description: string;
    calories: number;
}

export default Prato;