import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../item/Item';
import PropTypes from 'prop-types';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { setSortParameters } from '../../redux/actions';
import './ItemList.css';

export const FIELDS = {
  item: 'item',
  category: 'category',
  price: 'price'
};

const ASC = 'ASC';
const DESC = 'DESC';
const ALL = 'all';
/**
 * ItemList Component
 * Renders list of items
 */
class ItemList extends Component {
  sortBy(fieldName) {
    this.props.sortBy(fieldName);
  }

  ascDescIcon(field) {
    if (this.props.orderBy.by === field && this.props.orderBy.order === ASC) {
      return (<span className="icon"><ArrowUpwardIcon /></span>)
    } else if (this.props.orderBy.by === field && this.props.orderBy.order === DESC) {
      return (<span className="icon"><ArrowDownwardIcon /></span>)
    }
    return

  }

  render() {
    return (
      <div id='item-container'>
        <div className="row head">
          <div className="cell">
            <span onClick={() => this.sortBy(FIELDS.item)}>item</span>
            {this.ascDescIcon(FIELDS.item)}
          </div>
          <div className="cell">
            <span onClick={() => this.sortBy(FIELDS.category)}>Category</span>
            {this.ascDescIcon(FIELDS.category)}
          </div>
          <div className="cell">
            <span onClick={() => this.sortBy(FIELDS.price)}>Price</span>
            {this.ascDescIcon(FIELDS.price)}
          </div>
        </div>
        {this.props.items && this.props.items.map((item, index) => (
          <Item key={index + '_' + item.item + '_' + item.category + item.price} item={item} />
        ))}
      </div>
    );
  }

}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  ),
  orderBy: PropTypes.shape({
    by: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  }).isRequired,
  sortBy: PropTypes.func.isRequired,
};

const getFilteredList = (items, filter) => {
  if (filter === ALL) {
    return items;
  } else {
    return items.filter((item) => item.category === filter);
  }
}
const sortList = (items, sortParams) => {
  console.log(sortParams);
  const by = sortParams.by;
  const order = sortParams.order;

  if (by === FIELDS.price) {
    return [...items].sort((a, b) => {
      if (order === ASC) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  } else if (by !== '') {
    return [...items].sort((a, b) => {
      var nameA = a[by].toLowerCase(); // ignore upper and lowercase
      var nameB = b[by].toLowerCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return order === ASC ? -1 : 1;
      }
      if (nameA > nameB) {
        return order === ASC ? 1 : -1;
      }
      return 0;
    });
  }
  return items;
}

const mapStateToProps = (state) => {
  if (state.manageItems.items.length > 0) {
    return {
      items: sortList(
        getFilteredList(state.manageItems.items, state.filter),
        state.sort),
      orderBy: state.sort
    };
  } else {
    return {
      items: [],
      orderBy: {
        by: '',
        order: '',
      }
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  sortBy: fieldName => dispatch(setSortParameters(fieldName))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);