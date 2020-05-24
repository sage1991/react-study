import React, { Component, ChangeEvent, FormEvent } from "react";
import Button, { ButtonType } from "../../../components/UI/Button/Button";
import css from "./ContectData.module.css";
import { Ingredients } from "../../BurgerBuilder/BurgerBuilder";
import axios from "../../../core/http/Axios";
import Spinner from "../../../components/UI/spinner/Spinner";
import { RouteComponentProps } from "react-router-dom";
import Input, { InputType } from "../../../components/UI/Input/Input";


export enum DeliveryMethod {
  Fastest = "fastest",
  Fast = "fast",
  Normal = "normal",
  Cheapest = "cheapest"
}



export type FormConfig = {
  elementType: InputType;
  elementConfig: InputConfig | SelectConfig;
  value: string;
  label: string;
}


export type InputConfig = {
  name: string;
  type: string;
  placeholder: string;
};

export type SelectConfig = {
  name: string;
  option: {
    name: string;
    value: DeliveryMethod;
  }[];
};


interface ContectDataProps extends RouteComponentProps {
  ingredients: Ingredients;
  totalPrice: number;
}


interface ContectDataState {
  orderForm: {
    name: FormConfig;
    email: FormConfig;
    street: FormConfig;
    zipCode: FormConfig;
    country: FormConfig;
    deliveryMethod: FormConfig;
  };
  loading: boolean;
}



class ContectData extends Component<ContectDataProps, ContectDataState> {
  
  state: ContectDataState = {
    orderForm: {
      name: {
        elementType: InputType.Input,
        elementConfig: {
          name: "name",
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        label: "Name"
      },
      email: {
        elementType: InputType.Input,
        elementConfig: {
          name: "email",
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        label: "Email"
      },
      street: {
        elementType: InputType.Input,
        elementConfig: {
          name: "street",
          type: "text",
          placeholder: "Street"
        },
        value: "",
        label: "Street"
      },
      zipCode: {
        elementType: InputType.Input,
        elementConfig: {
          name: "zipCode",
          type: "text",
          placeholder: "ZIP Code"
        },
        value: "",
        label: "ZIP Code"
      },
      country: {
        elementType: InputType.Input,
        elementConfig: {
          name: "country",
          type: "text",
          placeholder: "Country"
        },
        value: "",
        label: "Country"
      },
      deliveryMethod: {
        elementType: InputType.Select,
        elementConfig: {
          name: "deliveryMethod",
          option: [
            { name: "Fastest", value: DeliveryMethod.Fastest},
            { name: "Fast", value: DeliveryMethod.Fast},
            { name: "Normal", value: DeliveryMethod.Normal},
            { name: "Cheapest", value: DeliveryMethod.Cheapest}
          ]
        },
        value: "",
        label: "Delivery Method"
      }
    },
    loading: false
  }

  render() {

    let form;
    if (this.state.loading) {
      form = <Spinner />;
    } else {

      const formElements: {
        id: string;
        config: FormConfig
      }[] = [];
      for (const key in this.state.orderForm) {
        formElements.push({
          id: key,
          config: (this.state.orderForm as any)[key]
        })
      }

      form = (
        <form onSubmit={this.orderHandler}>
          {
            formElements.map(element => {
              return (
                <Input 
                  key={element.id}
                  inputType={element.config.elementType}
                  elementConfig={element.config.elementConfig}
                  label={element.config.label}
                  value={element.config.value}
                  onChange={this.inputChangedhandler} />
              );
            })
          }
          <Button buttonType={ButtonType.Success}>ORDER</Button>
        </form>
      );
    }
    return (
      <div className={css.ContectData}>
        <h4>enter your contact data</h4>
        {form}
      </div>
    );
  }


  inputChangedhandler = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
      [e.target.name] : {
        ...(this.state.orderForm as any)[e.target.name]
      }
    };
    (updatedOrderForm as any)[e.target.name].value = e.target.value;
    this.setState({
      orderForm: updatedOrderForm
    })
  }

  orderHandler = (e:FormEvent) => {
    e.preventDefault();

    this.setState({
      loading : true,
    });

    const order = {
      ingredients : this.props.ingredients,
      price : this.props.totalPrice,
      orderData: null,
    };

    const orderData:any = {};
    for (let key in this.state.orderForm) {
      orderData[key] = (this.state.orderForm as any)[key].value;
    }
    order.orderData = orderData;

    axios
      .post("/order.json", order)
      .then(response => {
        console.log(response);
        this.setState({
          loading : false,
        });
        this.props.history.replace("/");
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading : false,
        });
      });
  }

}

export default ContectData;