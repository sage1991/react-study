import { withPrice } from "../../hoc/withPrice/WithPrice";
import { BurgerBuilder } from "./BurgerBuilder";


const BurgerBuilderWithPrice = withPrice(BurgerBuilder);
export { BurgerBuilderWithPrice };