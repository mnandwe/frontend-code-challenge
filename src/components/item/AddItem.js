import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';

import { createItem } from '../../redux/actions';
import './AddItem.css';

/**
 * Renders form for adding a new item
 */
class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      item: '',
      category: '',
      price: 0,
      priceErr: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'price') {
      this.setState({ priceErr: '' })
    }

    this.setState({
      [name]: value
    });
  }


  onSubmit(event) {
    event.preventDefault();
    const item = {
      item: this.state.item,
      category: this.state.category.toLowerCase(),
      price: parseFloat(this.state.price),
    };

    if (!item.price) {// for older browser, don't add if price is negative
      this.setState({ priceErr: 'error' })
      return;
    }
    this.props.addItem(item);
  }

  render() {
    return (
      <div id="add-item-form">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="item">
            <span>Item</span>
            <input name="item" type="text" value={this.state.item} onChange={this.handleInputChange} />
          </label>
          <label htmlFor="category">
            <span>Category</span>
            <input name="category" type="text" value={this.state.category} onChange={this.handleInputChange} />
          </label>
          <label htmlFor="price" className={this.state.priceErr}>
            <span>Price</span>
            <input name="price" type="number" min="0" max="999" step=".01" value={this.state.price} onChange={this.handleInputChange} />
          </label>
          <button type="submit">
            <AddIcon />
          </button>
        </form>
      </div>
    )
  }
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(createItem(item))
})


export default connect(null, mapDispatchToProps)(AddItem)
