import { StoreState } from "../../../core/store/Store";
import { connect } from "react-redux";
import { Contact } from "../../components/organism/checkout/contact/Contact";


const mapStateToProps = (state: StoreState) => {
  return {
    model: state.burger.burger
  }
}
const connector = connect(mapStateToProps);
const ContactWithStore = connector(Contact);

export { ContactWithStore };