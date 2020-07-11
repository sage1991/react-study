
enum Ingredient {
  MEAT = "meat",
  CHEESE = "cheese",
  BACON = "bacon",
  SALAD = "salad",
}


const toIngredientName = (type: Ingredient) => {
  switch (type) {
    case Ingredient.MEAT : 
      return "고기";
    case Ingredient.CHEESE : 
      return "치즈";
    case Ingredient.BACON : 
      return "베이컨";
    case Ingredient.SALAD : 
      return "샐러드";
  }
}

export { Ingredient, toIngredientName };