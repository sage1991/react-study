import React, { FC } from "react";
import css from "./Order.module.css";

// interface OrderProps {
//   order : OrderType;
// }


// const Order: FC<OrderProps> = (props) => {
//   return (
//     <div className={css.Order}>
//       <h4>Ingredients</h4>
//       {
//         (Object.keys(props.order.ingredients) as IngredientType[])
//         .filter((key: IngredientType) => {
//           return (
//             key !== IngredientType.BreadBottom && 
//             key !== IngredientType.BreadTop && 
//             props.order.ingredients[key] > 0
//           );
//         })
//         .map((key: IngredientType) => {
//           return (
//             <p 
//               key={key} 
//               style={{
//                 textTransform: "capitalize",
//                 display: "inline-block",
//                 margin: "0 8px",
//                 border: "1px solid #cccccc",
//                 padding: "5px"
//               }}>
//               {`${key} (${props.order.ingredients[key]})`}
//             </p>
//           );
//         })
//       }
//       <p>Price <strong>USD {props.order.price}</strong></p>
//     </div>
//   );
// }

export {  };