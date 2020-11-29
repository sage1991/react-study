import React, { FC } from "react";
import "./IngredientList.css";
import { Ingredient } from "../../types/Ingredient";


interface IngredientListProps {
  ingredients: Ingredient[];
  onRemoveItem: (id: number) => void;
}


export const IngredientList: FC<IngredientListProps> = (props) => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {
          props.ingredients.map(ig => (
            <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
              <span>{ig.title}</span>
              <span>{ig.amount}x</span>
            </li>
          ))
        }
      </ul>
    </section>
  );
}