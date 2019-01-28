import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as cartActions from '../actions/cart';
import Menu from "../components/Menu";



const mapStateToProps = ({ cart }) => {
    console.log(cart);
    return {
        totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
        count: cart.items.length,
        items: cart.items,
    }
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

