import React, { FC, useCallback, useEffect, useState } from "react";
import { IngredientForm } from "./IngredientForm";
import { Search } from "./Search";
import { Ingredient } from "../../types/Ingredient";
import { IngredientList } from "./IngredientList";
import { ErrorModal } from "../UI/ErrorModal";


export const Ingredients: FC = () => {
  const [ ingredients, setIngredients ] = useState<Ingredient[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<string>();
  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredients = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/ingredients");
      const ingredients = await response.json();
      setIngredients(ingredients);
    } catch (e) {
      setError("oops!! something went wrong..");
    }
    setLoading(false);
  }

  const onFilterChange = useCallback(async (filter: string) => {
    setLoading(true);
    const response = await fetch(`http://localhost:3001/ingredients?title_like=${filter}`);
    const ingredients = await response.json();
    setIngredients(ingredients);
    setLoading(false);
  }, [ setIngredients ]);

  const onSubmit = async (ingredient: Ingredient) => {
    setLoading(true);
    await fetch("http://localhost:3001/ingredients", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" }
    });
    setIngredients([ ...ingredients, ingredient ]);
    setLoading(false);
  }

  const onRemoveItem = async (id: number) => {
    setLoading(true);
    await fetch(`http://localhost:3001/ingredients/${id}`, { method: "DELETE" });
    setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
    setLoading(false);
  }

  const closeErrorModal = () => setError("");

  return (
    <div className="App">
      <IngredientForm onSubmit={onSubmit} loading={loading} />
      <section>
        <Search onFilterChange={onFilterChange} />
        <IngredientList ingredients={ingredients} onRemoveItem={onRemoveItem} />
      </section>
      {
        error
        && <ErrorModal onClose={closeErrorModal}>{ error }</ErrorModal>
      }
    </div>
  );
}