import React, { ChangeEvent, FC, FormEvent, memo, useState } from "react";
import { Card } from "../UI/Card";
import "./IngredientForm.css";


export const IngredientForm: FC = memo(() => {

  const [ title, setTitle ] = useState<string>("");
  const [ amount, setAmount ] = useState<string>("");

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // ...
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "title") setTitle(value);
    else setAmount(value);
  }

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              value={title} 
              onChange={onChange} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input 
              type="number" 
              id="amount" 
              name="amount" 
              value={amount} 
              onChange={onChange} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
})