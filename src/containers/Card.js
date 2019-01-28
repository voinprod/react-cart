import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as cartActions from '../actions/cart';
import Card from "../components/Card";



const mapStateToProps = ({ cart }) => {
    return {
        addedCart: 0
    }
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);

