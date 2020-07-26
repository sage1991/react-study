import { withPrice } from "../../hoc/withPrice/WithPrice";
import { BurgerBuilder } from "../../page/burger/BurgerBuilder";


const BurgerBuilderWithPrice = withPrice(BurgerBuilder);
export { BurgerBuilderWithPrice };