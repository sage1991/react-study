import React, { FC, useState } from "react";
import { IngredientForm } from "./IngredientForm";
import { Search } from "./Search";
import { Ingredient } from "../../types/Ingredient";
import { IngredientList } from "./IngredientList";


export const Ingredients: FC = () => {
  const [ ingredients, setIngredients ] = useState<Ingredient[]>([]);

  const onSubmit = (ingredient: Ingredient) => {
    setIngredients([ ...ingredients, ingredient ]);
  }

  const onRemoveItem = (id: number) => {
    setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
  }

  return (
    <div className="App">
      <IngredientForm onSubmit={onSubmit}/>
      <section>
        <Search />
        <IngredientList ingredients={ingredients} onRemoveItem={onRemoveItem} />
      </section>
    </div>
  );
}

