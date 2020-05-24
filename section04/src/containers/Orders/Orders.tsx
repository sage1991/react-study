import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../core/http/Axios";
import { RouteComponentProps } from "react-router-dom";
import { Ingredients } from "../BurgerBuilder/BurgerBuilder";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";


export type OrderType = {
  id:string;
  customer: {
    address: {
      country: string;
      street: string;
      zipCode: string;
    };
    deliveryMethod: string;
    email: string;
    name: string;
  },
  ingredients: Ingredients;
  price: number;
}



interface OrdersProps extends RouteComponentProps {

}


interface OrdersState {
  orders: OrderType[];
  loading: boolean;
}


class Orders extends Component<OrdersProps, OrdersState> {
  
  state: OrdersState = {
    orders: [],
    loading: true,
  }

  render() {
    return (
      <div>
        {
          this.state.orders.map((order) => {
            return <Order key={order.id} order={order} />
          })
        }
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("/order.json")
      .then(response => {
        console.log(response.data);
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({...response.data[key], id: key});
        }
        this.setState({
          loading: false,
          orders: fetchedOrders
        });
      });
  }

}


export default WithErrorHandler(Orders, axios);