class Prato {
  constructor(
    name: string,
    description: string,
    calories: number,
    nutritionist: string
  ) {
    this.name = name;
    this.description = description;
    this.calories = calories;
    this.nutritionist = nutritionist;
  }

  name: string;
  description: string;
  calories: number;
  nutritionist: string;
}

export default Prato;