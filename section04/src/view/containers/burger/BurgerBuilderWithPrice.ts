import { withPrice } from "../../hoc/withPrice/WithPrice";
import { BurgerBuilder } from "../../page/burger-builder/BurgerBuilder";


const BurgerBuilderWithPrice = withPrice(BurgerBuilder);
export { BurgerBuilderWithPrice };