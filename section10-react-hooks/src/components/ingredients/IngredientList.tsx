import React, { FC } from "react";
import "./IngredientList.css";


interface IngredientListProps {
  ingredients: any[];
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