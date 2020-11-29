import React, { FC, useCallback, useEffect, useReducer, useState } from "react";
import { IngredientForm } from "./IngredientForm";
import { Search } from "./Search";
import { Ingredient } from "../../types/Ingredient";
import { IngredientList } from "./IngredientList";
import { ErrorModal } from "../UI/ErrorModal";



enum ActionType {
  SET,
  ADD,
  DELETE
}

interface SetAction {
  type: ActionType.SET;
  payload: Ingredient[];
}

interface AddAction {
  type: ActionType.ADD;
  payload: Ingredient;
}

interface DeleteAction {
  type: ActionType.DELETE;
  id: number;
}

type Action = SetAction | AddAction | DeleteAction;

const reducer = (prevState: Ingredient[], action: Action) => {
  switch (action.type) {
    case ActionType.SET:
      return action.payload;
    case ActionType.ADD:
      return [ ...prevState, action.payload ];
    case ActionType.DELETE:
      return prevState.filter((ingredient) => ingredient.id !== action.id);
    default:
      return prevState;
  }
}



export const Ingredients: FC = () => {
  const [ ingredients, dispatch ] = useReducer(reducer, []);
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
      if (!Array.isArray(ingredients)) throw new Error("ingredients is not an array");
      dispatch({ type: ActionType.SET, payload: ingredients });
    } catch (e) {
      setError("oops!! something went wrong..");
    }
    setLoading(false);
  }

  const onFilterChange = useCallback(async (filter: string) => {
    setLoading(true);
    const response = await fetch(`http://localhost:3001/ingredients?title_like=${filter}`);
    const ingredients = await response.json();
    dispatch({ type: ActionType.SET, payload: ingredients });
    setLoading(false);
  }, [ dispatch ]);

  const onSubmit = async (ingredient: Ingredient) => {
    setLoading(true);
    await fetch("http://localhost:3001/ingredients", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" }
    });
    dispatch({ type: ActionType.ADD, payload: ingredient });
    setLoading(false);
  }

  const onRemoveItem = async (id: number) => {
    setLoading(true);
    await fetch(`http://localhost:3001/ingredients/${id}`, { method: "DELETE" });
    dispatch({ type: ActionType.DELETE, id: id });
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