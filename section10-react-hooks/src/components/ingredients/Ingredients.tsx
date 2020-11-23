import React, { FC } from "react";
import { IngredientForm } from "./IngredientForm";
import { Search } from "./Search";


export const Ingredients: FC = () => {
  return (
    <div className="App">
      <IngredientForm />
      <section>
        <Search />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

