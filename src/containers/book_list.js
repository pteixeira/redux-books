import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

// BookList.propTypes = {
//   books: React.PropTypes.array.isRequired
// }

function mapStateToProps(state) {
  // take application state as argument
  // whatever is returned will show up as props inside BookList
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props in the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook.
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
