// import React, { FC, Fragment } from "react";
// import { Ingredients } from "../../../containers/BurgerBuilder/BurgerBuilder";
// import { IngredientType } from "../BurgerIngredient/BurgerIngredient";
// import Button, { ButtonType } from "../../UI/Button/Button";

// interface OrderSummaryProps {
//   totalPrice: number;
//   ingredients: Ingredients;
//   purchaseCanceled : () => void;
//   purchaseContinued : () => void;
// }

// const OrderSummary: FC<OrderSummaryProps> = (props: OrderSummaryProps) => {
//   const ingredientSummary = (Object.keys(props.ingredients) as IngredientType[])
//     .filter(
//       (key: IngredientType) =>
//         key !== IngredientType.BreadBottom && key !== IngredientType.BreadTop
//     )
//     .map((key: IngredientType) => {
//       return (
//         <li key={key}>
//           <span style={{ textTransform: "capitalize" }}>{key}</span> :{" "}
//           {props.ingredients[key]}
//         </li>
//       );
//     });

//   return (
//     <Fragment>
//       <h3>Your order</h3>
//       <p>A delicious burger with the following ingredients : </p>
//       <ul>{ingredientSummary}</ul>
//       <p><b>Total Price : {props.totalPrice}$</b></p>
//       <p>Continue to Checkout?</p>
//       <Button buttonType={ButtonType.Danger} onClick={props.purchaseCanceled}>CANCLE</Button>
//       <Button buttonType={ButtonType.Success} onClick={props.purchaseContinued}>CONTINUE</Button>
//     </Fragment>
//   );
// };

// export default OrderSummary;

export {  };
