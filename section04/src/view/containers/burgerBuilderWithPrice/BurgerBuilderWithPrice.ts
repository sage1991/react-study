import { withPrice } from "../../hoc/withPrice/WithPrice";
import { BurgerBuilder } from "../../page/burgerBuilder/BurgerBuilder";


const BurgerBuilderWithPrice = withPrice(BurgerBuilder);
export { BurgerBuilderWithPrice };