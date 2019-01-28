import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as booksActions from '../actions/books';
import App from "../components/App";
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'all':
      return books
    case 'priceLow':
      return orderBy(books, 'price', 'asc')
    case 'priceHigh':
      return orderBy(books, 'price', 'desc')
    default:
      return books
  }
}

const filterBooks = (books, searchQuery) =>
  books.filter(o =>
    o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    || o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  )


const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy)
}

const mapStateToProps = ({ books, filter }) => {
  return {
    books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
    preloader: books.preloader,
    filterBy: books.filterBy
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
