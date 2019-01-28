import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as filterActions from '../actions/filterBy';
import Sort from "../components/Sort";



const mapStateToProps = (store) => ({
    filterBy: store.books.filterBy,
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sort);

